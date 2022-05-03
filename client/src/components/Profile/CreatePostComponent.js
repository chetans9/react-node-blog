
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PostForm from './PostForm';
import { Link } from 'react-router-dom';

import axios from 'axios';


function CreatePostComponent(props) {

    let editMode = false;

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category_id: "",
    });

    const [loading, setLoading] = useState(true);
    let [categories, setCategories] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        loadFormData();
    }, []);

    const loadFormData = async function () {

        let categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/select-data`);
        setCategories(categories.data);
        setLoading(false);

    }

    // const handleInputChange = (event) => {


    //     setFormData((prevProps) => ({
    //         ...prevProps,
    //         [event.target.name]: event.target.value
    //     }));
    // };

    const handleSubmit = function (values) {

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/posts/create`, values).then(function (res) {
            
            navigate("/profile/posts",{state : {alertType : "success", alertMsg : "Post Created successfully" }});

        }).catch((err) => {

            alert(err);
        });



    }


    return <>

        {(loading === true) ? "Loading" :

            <div>
                {/* <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/profile">Profile</Link></li>
                            <li className="breadcrumb-item"><Link to="/profile/posts">Posts</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Create Post</li>
                        </ol>
                    </nav>
                </div> */}

                {/* <div className='header'>
                    <h4>Create Post</h4>
                </div> */}
                {/* <hr></hr> */}
                <PostForm handleSubmit={handleSubmit} formData={formData} categories={categories} />
            </div>


        }


    </>


}

export default CreatePostComponent;