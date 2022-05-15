import React, { useState } from "react";
import AutoComplete from "../Autocomplete";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../utils/mutations";
import { ImageUpload } from '../ImageUpload';

// review form
export default function Write() {
  const [addReview, { loading, error, reset }] = useMutation(ADD_REVIEW);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);
  const [location, setLocation] = useState("");
  


  if (loading) return "Review Submitted";
  if (error) return `Submission error! ${error.message}`;

  const handleLocationChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleReviewChange = (e) => {
    console.log(e.target.value);
    setReviewText(e.target.value);
  };

  const handleRatingChange = (e) => {
    console.log(e.target.value);
    setRating(parseInt(e.target.value));
  };

  const handleAddReview = (e) => {
    const addReviewEl = document.querySelector('.write-container');
    addReviewEl.classList.toggle('is-hidden');
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const imageInput = document.querySelector('#image-input');

    const files = imageInput.files;
    //console.log(files);

    const uploadUrlArray = await fetch(`/s3URL/${files.length}`).then(res => res.json());
    //console.log(uploadUrlArray.url);

    let imageUrls = [];

    for (let i = 0; i < uploadUrlArray.url.length; i++) {
        //console.log(url);
        const url = uploadUrlArray.url[i];

        await fetch(url, {
            method: "PUT",
            header: {
                "Content-Type": "multipart-form-data"
            },
            body: files[i]
        });

        const imageUrl = url.split('?')[0];
        imageUrls.push(imageUrl);
        //console.log(imageUrls);
        // console.log('=================');
        // console.log(imageUrl);
    }
    return imageUrls;
}


  return (
    <div className="write-position is-hidden write-bg write-container mobile-p">
      <div className='is-flex is-justify-content-space-between'>
        <h1 className="title mobile-title">Add Review</h1>
        <button className='delete' onClick={handleAddReview}></button>
      </div>

      <form
        className="is-flex is-flex-direction-column"
        onSubmit={async (e) => {
          //e.preventDefault();
          const imageUrls = await handleImageUpload(e);
          console.log(imageUrls);
          addReview({ variables: { reviewText, rating, location, imageUrls } });
          // use reset so it doesnt remove the whole addreview element
          reset();
        }}
      >
        <div className='mb-1'>
          <AutoComplete change={handleLocationChange} />
        </div>

        <textarea
          className=" textarea mb-1"
          onChange={handleReviewChange}
          placeholder="Add review text here..."
        ></textarea>
        <select className="select" id="stars" onChange={handleRatingChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <ImageUpload></ImageUpload>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      
    </div>
  );
}
