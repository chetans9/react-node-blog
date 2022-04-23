
import { useEffect, useState } from 'react';
import ProfileSideBarComponent from './ProfileSideBarComponent';
import { useNavigate } from "react-router-dom";
import PostForm from './PostForm';
import { Link } from 'react-router-dom';

import axios from 'axios';


function PostsListComponet(props) {

    let editMode = false;

    const [loading, setLoading] = useState(true);
    let [posts, setPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile/posts`).then((result) => {



            setPosts(result.data.data);
            setLoading(false);
        });




    }, []);




    return <>

        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/profile">Profile</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>

        <div className='header'>
            <h4>You Posts</h4>
        </div>
        <hr></hr>




        <div className='row'>
            <div className='col-sm-3'>
                <ProfileSideBarComponent></ProfileSideBarComponent>

            </div>
            <div className='col-sm-8'>

                {(loading === true) ? "Loading" :

                    <div>

                        <div className="text-right">
                            <Link to="/profile/posts/create">
                                <button className='btn  btn-primary'>Create New</button>
                            </Link>
                        </div>

                        <div className='post-list'>
                            <table className='table table-primary'>

                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Created at</th>
                                    </tr>
                                </thead>

                                {posts.map((post) => (

                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.createdAt}</td>
                                    </tr>


                                ))}

                            </table>

                        </div>



                    </div>





                }



            </div>

        </div>




    </>


}

export default PostsListComponet;