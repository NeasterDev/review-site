import React from "react";
import "./style.css";
import Write from "../../Write/index";
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();
  
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
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

  export default function Profile() {
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="column">
          <div className="column is-three-fifths is-one-fifth-desktop">
            <text>[image goes here]</text>
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
  }
};
