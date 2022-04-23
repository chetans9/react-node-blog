
import { useEffect, useState } from 'react';
import ProfileSideBarComponent from './ProfileSideBarComponent';
import { useNavigate } from "react-router-dom";
import PostForm from './PostForm';
import { useParams } from 'react-router-dom';

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

    const loadFormData = async function(){

        

        let  reqData  = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}/edit`);
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

    const handleInputChange = (event) => {


        setFormData((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = function(e){

        e.preventDefault();
        

        axios.patch(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}/edit`, formData).then(function(res){

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

export default EditPostComponent;