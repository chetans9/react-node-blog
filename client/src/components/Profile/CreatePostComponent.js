
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PostForm from './PostForm';

import axios from 'axios';


function CreatePostComponent(props) {

    // let editMode = false;

    const formData = {
        title: "",
        description: "",
        category_id: "",
    };

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

        const formData = new FormData();
        for ( const key in values ) {
            formData.append(key, values[key]);
        }

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/posts/create`, formData).then(function (res) {
            
            
            navigate("/profile/posts",{state : {alertType : "success", alertMsg : "Post Created successfully" }});

        }).catch((err) => {

            alert(err);
        });



    }


    return <>

        {(loading === true) ? "Loading" :

            <div>
                <PostForm handleSubmit={handleSubmit} formData={formData} categories={categories} />
            </div>


        }


    </>


}

export default CreatePostComponent;