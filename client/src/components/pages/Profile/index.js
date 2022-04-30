import React from "react";
import "./style.css";
import Write from "../../Write/index";
import { QUERY_GET_ME} from "../../../utils/query";
import { ADD_REVIEW} from '../../../utils/mutations';
import Auth from "../../../utils/auth";
import { useState } from "react";
import { useQuery } from "@apollo/client";

export default function Profile({location, rating, reviewText}) { 
    // const [textreview, setText] = useState('');
    
    // const [addReview, { error }] = useQuery(QUERY_GET_ME, {
    //   update(cache, { data: { addReview} }) {
    //     try {
    //       const { review } = cache.readQuery({ query: QUERY_GET_ME});
    //       cache.writeQuery({
    //         query: QUERY_GET_ME,
    //         data: { thoughts: [addReview, ...review] },
    //       });
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   }
    // });

    return (
      <div className="profile mt-4r">
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

  
