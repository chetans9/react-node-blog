import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCardComponent from '../components/Posts/PostCardComponent';
import queryString from 'query-string';

function SearchPageComponent(props) {

    let [posts, setPosts] = useState([]);


    let [loadingPosts, setLoadingPosts] = useState(true);

    let [formData, setformData] = useState(
        {
            str: "",
            sort_by: ""
        }
    );

    // let handleSearchChange = (event) => {
    //     setformData({ str: event.target.value });
    // }

    let set = function(name){

        return (event) => {

            setformData({ [name]: event.target.value });
        } 



    }

    //const searchData = queryString.parse(window.location.search);


    useEffect(() => {

        loadPosts();
    }, []);

    let loadPosts = () => {

        let qs = queryString.stringify(formData);


        axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/search?${qs}`).then((result) => {

            setPosts(result.data.data);
            setLoadingPosts(false);
        });



    }

    let handleSubmit = (event) => {
        event.preventDefault();

        // window.history.pushState(queryString.parse(window.location.search));
        // setformData(queryString.parse(window.location.search));



        loadPosts();



    }

    return <>
        <h3>Search page </h3>

        <hr></hr>
        <div id="searchFormSection">
            <form className='form' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-lg-8'>

                        <div className='row'>
                            <div className='offset-lg-4 col-lg-3 col-sm-3'>
                                <label>Search</label>
                                <input type='text' className='form-control' onChange={set('str')} value={formData.search} />
                            </div>

                            <div className='col-lg-2 col-sm-2'>
                                <label>Order By</label>

                                <select className="form-select" aria-label="Default select example" value={formData.sort_by} onChange={set('sort_by')}>
                                    <option value="">Select</option>
                                    <option value={"newest"}>Newest</option>
                                    <option value={"olodest"}>Oldest</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-sm-2'>
                                <label><span> </span></label>
                                <button type='submit' className='form-control btn btn-primary' onChange={handleSubmit} value={formData.search}>Search</button>

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