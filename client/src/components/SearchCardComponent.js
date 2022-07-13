import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function SearchCardComponent() {
    const searchInput = useRef();

    let navigate = useNavigate();
    let handleSubmit = () => {

        let value = searchInput.current.value;


        navigate('/search?str=' + value);
    }

    return <div className='card'>
        <div className="card-header">Search</div>
        <div className="card-body">
            <form className='form' onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" ref={searchInput} />
                    <button className="btn btn-primary" id="button-search" type="submit">Go!</button>
                </div>
            </form>
        </div>
    </div>
}

export default SearchCardComponent;
