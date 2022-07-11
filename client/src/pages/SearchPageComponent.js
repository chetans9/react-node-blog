import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCardComponent from '../components/Posts/PostCardComponent';


function SearchPageComponent(props) {

    let [posts, setPosts] = useState([]);
    let [loadingPosts, setLoadingPosts] = useState(true);

    let [formData, setformData] = useState(
        {
            search: ""
        });

    let handleSearchChange = (event) => {
        setformData({ search: event.target.value });
    }


    useEffect(() => {


        loadPosts();

    }, []);

    let loadPosts = () => {

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/search`).then((result) => {
            setPosts(result.data.data);
            setLoadingPosts(false);
        });







    }

    let handleSubmit = (event) => {

        event.preventDefault();


    }

    return <>
        <h3>Search page component</h3>

        <hr></hr>
        <div id="searchFormSection">
            <form className='form' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-lg-8'>

                        <div className='row'>
                            <div className='offset-lg-6 col-lg-4 col-sm-4'>

                                <input type='text' className='form-control' onChange={handleSearchChange} value={formData.search} />
                            </div>

                            <div className='col-lg-2 col-sm-2'>
                                <button type='submit' className='form-control btn btn-primary' onChange={handleSearchChange} value={formData.search}>Search</button>

                            </div>
                        </div>



                    </div>
                </div>
            </form>

        </div>


        <div className='row'>
            <div className='col-lg-12'>
                <div className="row">
                    {
                        loadingPosts === true ? 'Loading' :

                            posts.map((post, index) => (

                                <div className='col-lg-4' key={post.id}>

                                    <PostCardComponent post={post} />

                                </div>

                            )
                            )


                    }


                </div>


            </div>
        </div>
    </>



}


export default SearchPageComponent;