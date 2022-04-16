import DateFormat from '../Common/DateFormat';

import {Link} from 'react-router-dom';


function PostCardComponent(props) {

    const { post } = props;
    
    return <div className="card mb-4">
        <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
        <div className="card-body">
            <div className="small text-muted"><DateFormat date={post.createdAt} /></div>
            <h2 className="card-title h4">{post.title}</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>

            <Link className="btn btn-primary" to={`/post/${post.id}/${post.slug}`}>Read more →</Link>
        </div>
    </div>

}



export default PostCardComponent;