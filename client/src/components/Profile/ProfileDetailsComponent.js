import { useEffect, useState } from 'react';
import axios from 'axios';


function ProfileDetailsComponent(props) {

    const [loading, setLoading] = useState(true);
    let [profile, setProfile] = useState([]);


    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile`).then((result) => {

            setProfile(result.data);
            setLoading(false);
        });




    }, []);




    return <>


        <div id="profile_details">

            {loading ? "Loading" :

                <table class="table caption-top">
                    <caption>Your Profile</caption>


                    <tbody>

                        <tr>
                            <th scope="col">User Name</th>
                            <td scope="col">{profile.user_name}</td>
                        </tr>
                        <tr>
                            <th scope="col">First Name</th>
                            <td scope="col">{profile.first_name}</td>
                        </tr>

                        <tr>
                            <th scope="col">Last Name</th>
                            <td scope="col">{profile.last_name}</td>
                        </tr>


                        <tr>
                            <th scope="col">Created at</th>
                            <td scope="col">{profile.createdAt}</td>
                        </tr>
                    </tbody>
                </table>

            }


        </div>
    </>


}


export default ProfileDetailsComponent;