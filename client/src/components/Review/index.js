import React from "react";
import { Route } from 'react-router-dom';
import { ImageDisplay } from "../ImageDisplay";
import upArrow from "../../img/up-arrow.png";
import downArrow from "../../img/down-arrow.png";

export const Review = ({ editId, location, rating, reviewText, username, imageUrls, setImageLinks, handleEditReview }) => {
  // const lorem =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor at sem sed facilisis. Vivamus congue arcu dolor, in ornare enim pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse fermentum lectus eget hendrerit sodales. Aliquam bibendum tortor sem, id placerat nunc fermentum.";
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }

  const handleReviewClick = (e) => {
    const reviewBox = e.target.closest('.review-box');
    console.log(reviewBox.children);
    const descr = reviewBox.querySelector('.descr');
    descr.classList.toggle('rev-max-description');
  }


  const renderImages = () => {
    const imageContainer = document.querySelector('.image-position');
    imageContainer.classList.toggle('is-hidden');
    setImageLinks(imageUrls);
  }

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
      <div className="is-flex is-justify-content-end">
        <img className="vote" src={upArrow} />
        <img className="vote" src={downArrow} />
      </div>
      <Route exact path='/profile'>
        <div className="is-flex is-justify-content-end">
          <button className="button" onClick={handleEditReview}>Edit</button>
        </div>
      </Route>

    </div>
  );
};
