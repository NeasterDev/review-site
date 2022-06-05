import React, { useState } from "react";
import { Route } from 'react-router-dom';
import { ImageDisplay } from "../ImageDisplay";
import upArrow from "../../img/like1.png";
import downArrow from "../../img/negative-vote.png";
import { useMutation } from "@apollo/client";
import { UPVOTE, DOWNVOTE } from '../../utils/mutations';


export const Review = ({ editId, location, rating, reviewText, username, imageUrls, setImageLinks, handleEditReview, userId, reviewId, upvotes, downvotes, refetch, liked, disliked }) => {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }
  
  console.log(liked);

  // const checkVotes = () => {
  //   if (liked) {
      
  //   }
  // }
  // console.log(disliked);

  const [likeReview] = useMutation(UPVOTE,
    {
      variables: {
        userId,
        reviewId
      }
    });

  const [dislikeReview] = useMutation(DOWNVOTE,
    {
      variables: {
        userId,
        reviewId
      }
    });

  const handleReviewClick = (e) => {
    const reviewBox = e.target.closest('.review-box');
    const descr = reviewBox.querySelector('.descr');
    descr.classList.toggle('rev-max-description');
  }


  const renderImages = () => {
    const imageContainer = document.querySelector('.image-position');
    imageContainer.classList.toggle('is-hidden');
    setImageLinks(imageUrls);
  }

  const upvote = async (e) => {
    await likeReview();
    // refetch get reviews query to update votes
    refetch();
    // currentUserData.me.dislikedReviews.forEach(dislikedReview => {
    //   console.log(e.target.parentNode.childNodes);
    //   if (dislikedReview === reviewId) { e.target.parentNode.childNodes[2].classList.toggle('downvote-active') }
    // })
    // currentUserData.me.likedReviews.forEach(likedReview => {
    //   if (likedReview === reviewId) { e.target.classList.toggle('upvote-active') }
    // })
    
  }

  const downvote = async (e) => {
    await dislikeReview();
    refetch();
    // currentUserData.me.likedReviews.forEach(likedReview => {
    //   if (likedReview === reviewId) { e.target.parentNode.childNodes[1].classList.toggle('upvote-active') }
    // })
    // currentUserData.me.dislikedReviews.forEach(dislikedReview => {
    //   console.log(e.target);
    //   if (dislikedReview === reviewId) { e.target.classList.toggle('downvote-active') }
    // })
  }


  
  //checkIfVoted();
  const imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVRoge2Zv0oDMRjAf5UK4igqiLg7uQg+gC6KgoOjo3OfwMVH6Bu4+QKCm5PWRR3EwVWsm1snK8o5XIOxlzRf7o+X2vzgg3KXS75fv0vI3UEkEpk4OkASSFz7Jt/Qfie+F1dMw93kh2bRDiog1x86VXYWdRFFCrALvAJdYEfQXi0AV9IB1AUuloF74BaYk3au0dXGehHkkRiOjUTSeBV41treALPSAQb4ikhzEzfeAN7IrvkXwLR0ENLbqUsqsS3MozSRLaBHVkLFGeXNt8pEDoEP7BIq2t4py/OwzRvjAmDqoAV84ZZQcVzEYEQeXguAfqIBnHgI6NH6AxHbsV8nmsBpTokE+AQORiQ6T3pL3AGLVYqcF5BQ8Q5sWiQetHaPBpnSRMqKHrCu9b8wJKHiCVgKWaRPuh2BbCWGQ69MUCJ9YH/Qr60StsoEI9IH9gZ9uiphqkwwIkc5JYbDS6SKbfwMsAJcAmsV9G9kXJ7ZE9ex+IQYGlEkNKJIaPxLkU5tWWTxfok9LtSyRakFl4h1hxkaps8KJoKXcVUkpEknfok9bkzmZDcR5AIgnewmgpLJU5G4AEQikfr4BvQ2m7ExS3fcAAAAAElFTkSuQmCC";
  return (
    <div className="box review-box" id="edit-tag" data-location={location} data-rating={rating} data-review-text={reviewText} edit-id={editId}
      onClick={handleReviewClick}
    >
      <div className=" is-size-6 is-italic has-text-weight-medium">
        {location}
      </div>
      <div className="is-flex ">
        <div className="descr rev-max-description">{reviewText}</div>
      </div>
      <div>Rating {stars}</div>

      <div className="is-flex is-justify-content-space-between">
        <div>
          - {username}
        </div>
        {imageUrls.length ? <img onClick={renderImages} src={imgSrc} /> : null}
      </div>
      <div className="is-flex is-justify-content-end	">
        <div className="is-flex is-flex-direction-column is-justify-content-center m-votes">
          <span>{(upvotes - downvotes > 0) ? `+ ${upvotes - downvotes}` : upvotes - downvotes} votes</span>
        </div>
        <img onClick={upvote} className={`upvote`} src={upArrow} />
        <img onClick={downvote} className={`downvote`} src={downArrow} />
      </div>
      <Route exact path='/profile'>
        <div className="is-flex is-justify-content-end">
          <button className="button" onClick={handleEditReview}>Edit</button>
        </div>
      </Route>
    </div>
  );
};
