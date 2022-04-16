import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCardComponent from './PostCardComponent';

function PostCategoryComponent(props) {

  let { title } = useParams();
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/category/${title}`).then((result) => {

      posts = result.data.data;
      setPosts(posts);
      setLoading(false);
    });

  }, []);

  return <>
    <div className='postList'>
      <div className='row'>
        {
          (loading === true) ? 'Loading' :

            posts.map((post, index) => (
              <div className='col-sm-4' key={post.id}>
                <PostCardComponent post={post}></PostCardComponent>
              </div>
            )

            )
        }
      </div>

    </div>
  </>


}


export default PostCategoryComponent;