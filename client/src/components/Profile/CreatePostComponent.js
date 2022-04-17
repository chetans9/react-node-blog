
import { useEffect, useState } from 'react';
import ProfileSideBarComponent from './ProfileSideBarComponent';
import { useNavigate } from "react-router-dom";

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

    

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="form-control" id="Title" aria-describedby="TitleHelp" />
            </div>


            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>

                <select className="form-control" name='category_id' onChange={handleInputChange} >
                <option value={""} key={0}>Select</option>

                    {categories.map((category) => {
                        
                        const { title, id } = category;
                        
                        return <option value={id} key={id}>{title}</option>;
                    })}



                </select>

                {/* <Select options={Countries} /> */}

            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} className="form-control" id="description" />


            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    }


    </>


}

export default CreatePostComponent;