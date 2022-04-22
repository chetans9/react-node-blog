
import { useEffect, useState } from 'react';
import ProfileSideBarComponent from './ProfileSideBarComponent';
import { useNavigate } from "react-router-dom";
import PostForm from './PostForm';

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

    const loadFormData = async function(){

        let categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/select-data`);
        setCategories(categories.data);
        setLoading(false);

    }

    const handleInputChange = (event) => {


        setFormData((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = function(e){

        e.preventDefault();
        

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/posts/create`, formData).then(function(res){

            //useNavigate();
            navigate("/profile/posts");

        }).catch((err) => {

            alert(err);
        });



    }


    return <>

    { (loading  === true) ? "Loading" :  
    
    <PostForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} formData={formData} categories={categories} />

    }


    </>


}

export default CreatePostComponent;