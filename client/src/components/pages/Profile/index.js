import React from 'react';
import './style.css';

export default function Profile() {
  return (
    <div className="profile">
        <h1>Profile</h1>
        <div className="column">
          <div className="column is-three-fifths">
            <text>[image goes here]</text>
          </div>
          <div className="column is-full">
            <h1>Bio</h1>
          </div>
        </div>
        <div className="column">
          <div className="column is-two-fifths">
            <h2>Reviews</h2>
          </div>
          <div className="column is-two-fifths">
            <h2>Edit</h2>
          </div>
        </div>
    </div>
  );
}