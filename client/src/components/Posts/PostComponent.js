import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function PostComponent(props) {


  const [post, setPost] = useState(null);

  const [loading, setLoading] = useState(true);


  let { id,slug } = useParams();



  useEffect(() => {


    axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}/${slug}`).then((result) => {

 
      setPost(result.data);
      //console.log(result.data);
      setLoading(false);

    });




  },[]);



  return <>

    { loading === true ? 'Loading...' :
      <div className='post-details'>
        <div className='text-center' id='post-title'>
          <h3>{post.title}</h3>
          <div id='post-img-section'>
            <img id='post-img' src={post.post_image}></img>

          </div>
          
          </div>

        <div>
          {post.description}
        </div>
      </div>
    }


  </>








}


export default PostComponent;