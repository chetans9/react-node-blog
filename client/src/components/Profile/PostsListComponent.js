
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import axios from 'axios';


function PostsListComponet(props) {

    const [loading, setLoading] = useState(true);
    let [posts, setPosts] = useState([]);
    // let navigate = useNavigate();
    
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile/posts`).then((result) => {
            setPosts(result.data.data);
            setLoading(false);
        });

    }, []);




    return <>

        {/* <div>
            

            
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/profile">Profile</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div> */}

        {/* <div className='header'>
            <h4>You Posts</h4>
        </div> */}
        {/* <hr></hr> */}
        {/* <Messages/> */}








                {(loading === true) ? "Loading" :

                    <div>

                        <div className="text-right">
                            <Link to="/profile/posts/create">
                                <button className='btn  btn-primary'>Create New</button>
                            </Link>
                        </div>

                        <div className='post-list'>
                            <table className='table'>

                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Created at</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                {posts.map((post) => (

                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.createdAt}</td>
                                        <td>
                                            <Link to={"/profile/posts/" + post.id + "/edit"}>Edit</Link>

                                        </td>
                                    </tr>


                                ))}

                            </table>

                        </div>



                    </div>





                }





    </>


}

export default PostsListComponet;