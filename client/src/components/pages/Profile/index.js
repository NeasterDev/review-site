// import React from 'react';
// import './style.css';
// import Write from '../../Write/index';
// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery} from '@apollo/client';
// import { QUERY_USER, QUERY_GET_ME } from '../../../utils/query';
// import Auth from '../../../utils/auth';

// const Profile = (props) => {
//   const { username} = useParams();
// console.log(username)

//   const { loading, data } = useQuery(username ? QUERY_USER : QUERY_GET_ME, {
//     variables: { username},
//   });
//   console.dir(data)

//   // const user = data?.get_me || data?.user || {};

//   if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
//     return <Redirect to="/profile" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  
//    if(true) {
    
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }
import React from 'react';
 import './style.css';
 import Write from '../../Write/index';


export default function Profile() {
  return (
    <div className="profile">
        <h1>Profile</h1>
        <div className="column">
          <div className="column is-three-fifths is-one-fifth-desktop">
            <p>[image goes here]</p>
          </div>
          <div className="column is-full is-three-fifths-desktop">
            <h2>Bio</h2>
          </div>
        </div>
        <div className="column">
          <div className="column is-two-fifths is-three-fifths-desktop">
            <h2>Reviews</h2>
          </div>
          <div className="column is-two-fifths is-three-fifths-desktop">
            <h2>Edit</h2>
          </div>
        </div>
        <Write></Write>
      </div>
    );
};
