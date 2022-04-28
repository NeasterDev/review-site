import React from "react";
import "./style.css";
import Write from "../../Write/index";
import { QUERY_REVIEW, QUERY_GET_ME } from "../../../utils/query";
import Auth from "../../../utils/auth";


export const Review = ({location, rating, reviewText, username}) => {
  
}




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
  }

