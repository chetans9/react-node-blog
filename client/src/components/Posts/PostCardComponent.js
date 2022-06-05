import DateFormat from '../Common/DateFormat';

import {Link} from 'react-router-dom';


function PostCardComponent(props) {

    const { post } = props;
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    return <div className="card mb-4">
        <a href="#!"><img className="card-img-top" src={baseUrl + '/images/' + post.thumb_image} alt="..." /></a>
        <div className="card-body">
            <div className="small text-muted"><DateFormat date={post.createdAt} /></div>
            <h2 className="card-title h4">{post.title}</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>

            <Link className="btn btn-primary" to={`/post/${post.id}/${post.slug}`}>Read more →</Link>
        </div>
    </div>

}



export default PostCardComponent;