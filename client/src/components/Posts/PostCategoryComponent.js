import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCardComponent from './PostCardComponent';

function PostCategoryComponent(props) {

  let { title } = useParams();
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [curPage, setCurPage] = useState(1);
  let [prevY, setPrevY] = useState(0);
  let intersectRef = useRef();


  let handleObserver = function (entities, observer) {
    console.log(entities[0].isIntersecting)
    const y = entities[0].boundingClientRect.y;

    if (entities[0].isIntersecting) {
      // setCurPage((prev) => (prev + 1));
    }

  };




  let getPosts =  () => {

    axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/category/${title}?page=${curPage}`).then((result) => {
      setPosts(result.data.data);
      setLoading(false);
    });

  }

  let observer = new IntersectionObserver(
    handleObserver,
    observerOptions
  );

  var observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };


  if(intersectRef.current){
    observer.observe(intersectRef.current);

  }

  useEffect(() => {
    
    getPosts();
    // observer.observe(intersectRef.current);
  }, [curPage]);

  return <div className='container'>


    <div className='postList'>
      {curPage}
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

    <div ref={intersectRef}></div>
  </div>


}


export default PostCategoryComponent;