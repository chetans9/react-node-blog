import { NavLink } from 'react-router-dom';

function ProfileSideBarComponent() {


    return <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        {/* <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <svg className="bi me-2" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
        </a> */}

        <div className="list-group list-group-flush border-bottom scrollarea">
            <NavLink className="list-group-item list-group-item-action py-3 lh-tight" to="/profile/posts" aria-current="true">
            {/* <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true"> */}
                <div className="d-flex w-100 align-items-center justify-content-between">

                    <strong className="mb-1">Your Posts</strong>
                   
                </div>
                <div className="col-10 mb-1 small">Add or Edit Posts</div>
            {/* </a> */}
            </NavLink>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-muted">Tues</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
        </div>
    </div>

}

export default ProfileSideBarComponent;