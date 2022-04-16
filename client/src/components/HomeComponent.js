import React from 'react';
import axios from 'axios';
import PostCardComponent from './Posts/PostCardComponent';
import CategoriesCardComponent from './Categories/CategoriesCardComponent';
import Messages from './Partials/Messages';


class HomeComponent extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      loadingPosts: true,
      posts: []
    }
    



  }

  componentDidMount() {

    // console.log("React props ", this.props);

    axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`).then((result)=> {

      this.setState(
        {
          loadingPosts: false,
          posts: result.data.data
        }
      );




    });

  }


  componentWillUnmount() {

    clearInterval(this.timerID);
  }

  render() {

    return <div className='container'>

      <Messages></Messages>
      
      {/* {(this.props.location) ? this.props.location.state.msg : "not defined"} */}

      <div className='row'>
        <div className='col-lg-8'>

          <div className="row">

              {
                this.state.loadingPosts === true ? 'Loading' :

                this.state.posts.map((post, index) => (

                  <div className='col-lg-6'  key={post.id}>

                    <PostCardComponent post={post}/>

                  </div>

                  )
                )
              }
              
              
          </div>


        </div>

        <div className='col-lg-4'>

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