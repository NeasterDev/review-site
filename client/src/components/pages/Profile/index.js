import React from "react";
import "./style.css";
import Write from "../../Write/index";
import { QUERY_GET_ME} from "../../../utils/query";
import { ADD_REVIEW} from '../../../utils/mutations';
import Auth from "../../../utils/auth";
import { useState } from "react";
import { useMutation } from "@apollo/client";

<<<<<<< HEAD
const Profile = (props) => {
  const { username: userParam } = useParams();
  console.log(userParam);

  const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_GET_ME, {
    variables: { username: userParam },
  });

  const user = data?.get_me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="profile">
        <h1>Profile</h1>
        <div className="column">
          <div className="column is-three-fifths is-one-fifth-desktop">
            <p>[image goes here]</p>
=======
export const Profile= ({location, rating, reviewText}) => {
    const [textreview, setText] = useState('');
    
    const [addReview, { error }] = useMutation(QUERY_GET_ME, {
      update(cache, { data: { addReview} }) {
        try {
          const { review } = cache.readQuery({ query: QUERY_GET_ME});
          cache.writeQuery({
            query: QUERY_GET_ME,
            data: { thoughts: [addReview, ...review] },
          });
        } catch (e) {
          console.error(e);
        }
      }
    });


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
>>>>>>> 80c4fa031df01d3c998c2540ada72725f836c74c
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
  }

  
