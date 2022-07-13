import React from 'react';
import axios from 'axios';
import PostCardComponent from '../components/Posts/PostCardComponent';
import CategoriesCardComponent from '../components/Categories/CategoriesCardComponent';
import Messages from '../components/Partials/Messages';
import SearchCardComponent from '../components/SearchCardComponent';


class HomeComponent extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      loadingPosts: true,
      page: 1,
      prevY: 0,
      prvePostsCount: 0,
      posts: []
    }






  }


  componentDidMount() {


    this.getPosts(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);

  }

  getPosts(page) {

    axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts?page=${page}`).then((result) => {


      this.setState(
        {
          loadingPosts: false,
          posts: this.state.posts.slice().concat(result.data.data)
        }
      );




    });

  }


  componentWillUnmount() {

  }

  handleObserver(entities, observer) {

    const y = entities[0].boundingClientRect.y;

    if (this.state.prevY > y) {

      let curPage = this.state.page + 1;
      this.getPosts(curPage);
      this.setState({ page: curPage });
    }

    this.setState({ prevY: y });
  }

  render() {

    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };

    return <div className='container'>

      <Messages></Messages>

      {/* {(this.props.location) ? this.props.location.state.msg : "not defined"} */}

      <div className='row'>
        <div className='col-lg-8'>

          <div className="row">

            {
              this.state.loadingPosts === true ? 'Loading' :

                this.state.posts.map((post, index) => (

                  <div className='col-lg-6' key={post.id}>

                    <PostCardComponent post={post} />

                  </div>

                )
                )


            }

            <div
              ref={loadingRef => (this.loadingRef = loadingRef)}
              style={loadingCSS}
            >
              <span style={loadingTextCSS}>Loading...</span>
            </div>


          </div>


        </div>



        <div className='col-lg-4'>

          <SearchCardComponent></SearchCardComponent>

          <CategoriesCardComponent></CategoriesCardComponent>

        </div>
      </div>



    </div>
  }





}


// const PostsComponent = () => {

//   return (
//     <div>
//       <h1>Post Component here !</h1>
//     </div>


//   );


// }


export default HomeComponent;