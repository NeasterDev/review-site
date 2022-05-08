import React from "react";

export const EditReview = ({handleEditReview}) => {
    
    return (
        <div className="write-position write-bg edit-container mobile-p">
        <div className='is-flex is-justify-content-space-between'>
          <h1 className="title mobile-title">Edit Review</h1>
          <button className='delete' onClick={handleEditReview}></button>
        </div>
        </div>
    )
}