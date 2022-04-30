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
          <Write></Write>
      </div>
    );
  }

  
