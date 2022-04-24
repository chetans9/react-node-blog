
import { useEffect, useState } from 'react';
import ProfileSideBarComponent from './ProfileSideBarComponent';
import { useNavigate } from "react-router-dom";
import PostForm from './PostForm';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';


function EditPostComponent(props) {

    let editMode = true;

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category_id: "",
    });

    const [loading, setLoading] = useState(true);
    let [categories, setCategories] = useState([]);
    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        loadFormData();

    }, []);

    const loadFormData = async function () {



        let reqData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}/edit`);
        let formReqData = reqData.data;


        setFormData({
            title: formReqData.title,
            description: formReqData.description,
            category_id: formReqData.category_id,
        });



        // for (const property in formReqData) {
        //     if (formData[property] !== null) {
        //         initialValues[property] = props.customer[property]
        //     }
        // }

        // setFormData(formReqData);



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

        axios.patch(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}/edit`, values).then(function (res) {

            navigate("/profile/posts");

        }).catch((err) => {

            alert(err);
        });



    }


    return <>

        {(loading === true) ? "Loading" :

            <div>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/profile">Profile</Link></li>
                        <li className="breadcrumb-item"><Link to="/profile/posts">Posts</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Post</li>
                    </ol>
                </nav>


                <div className='header'>
                    <h4>Edit Post</h4>
                </div>
                <hr></hr>
                <PostForm handleSubmit={handleSubmit} formData={formData} categories={categories} />
            </div>


        }


    </>


}

export default EditPostComponent;