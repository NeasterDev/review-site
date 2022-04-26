import React from 'react';
//import './style.css'
import {Review} from '../../Review';

export default function Home() {
  return (
    <div className="homepage">
        <h1>Home</h1>
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
    </div>
  );
}