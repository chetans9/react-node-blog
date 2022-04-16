import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CategoriesCardComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            loadingCategories: true,
            categories: []

        };


    }


    componentDidMount() {

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`).then((result) => {

            this.setState(
                {
                    loadingCategories: false,
                    categories: result.data
                }
            );
        });

    }

    componentDidUpdate(){

    }


    render() {

        return <div className='card'>
            <div className="card-header">Categories</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">

                        <ul className="list-unstyled mb-0">

                            {
                            this.state.loadingCategories === true ? 'Loading' : 
                                
                            this.state.categories.map((category, index) => (

                                <li key={category.id}>
                                    <Link to={ `/category/${category.title}` } >{category.title}</Link>
                                    {/* <a href="#!">{category.title}</a> */}
                                </li>
                            )
                            )
                            
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>


        </div>;

    }

}



export default CategoriesCardComponent;