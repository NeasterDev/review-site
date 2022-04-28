import React from 'react';
import './style.css'
import {Review} from '../../Review';
import { GET_REVIEWS } from '../../../utils/query';
import  { useQuery }  from '@apollo/client';
import AutoComplete from '../../Autocomplete';

const Home = () => {

  const nationalParks = ["Acadia National Park", "Arches National Park", "Badlands National Park", "Big Bend National Park", "Biscayne National Park", "Black Canyon of the Gunnison National Park", "Bryce Canyon National Park", "Canyonlands National Park", "Capitol Reef National Park", "Carlsbad Caverns National Park", "Channel Islands National Park", "Congaree National Park", "Crater Lake National Park", "Cuyahoga Valley National Park", "Death Valley National Park", "Denali National Park and Preserve", "Dry Tortugas National Park", "Everglades National Park", "Gates of the Arctic National Park", "Gateway Arch National Park", "Glacier National Park", "Glacier Bay National Park", "Grand Canyon National Park", "Grand Teton National Park", "Great Basin National Park", "Great Sand Dunes National Park and Preserve", "Great Smoky Mountains National Park", "Guadalupe Mountains National Park", "Haleakala National Park", "Hawaii Volcanoes National Park", "Hot Springs National Park", "Indiana Dunes National Park", "Isle Royale National Park", "Joshua Tree National Park", "Katmai National Park and Preserve", "Kenai Fjords National Park", "Kings Canyon National Park", "Kobuk Valley National Park", "Lake Clark National Park", "Lassen Volcanic National Park", "Mammoth Cave National Park", "Mesa Verde National Park", "Mount Rainier National Park", "National Park of American Samoa", "New River Gorge National Park", "North Cascades National Park", "Olympic National Park", "Petrified Forest National Park", "Pinnacles National Park", "Redwood National Park", "Rocky Mountain National Park", "Saguaro National Park", "Sequoia National Park", "Shenandoah National Park", "Theodore Roosevelt National Park", "Virgin Islands National Park", "Voyageurs National Park", "White Sands National Park", "Wind Cave National Park", "Wrangell-St. Elias National Park and Preserve", "Yellowstone National Park", "Yosemite National Park", "Zion National Park"]

  const { loading, error, data } = useQuery(GET_REVIEWS);
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="homepage">
      <AutoComplete suggestions={nationalParks}/>
      {data.users.map(user => {
        if (user.savedReviews.length) {
          return user.savedReviews.map(review => {
            return (
              <Review key={review._id} location={review.location} reviewText={review.reviewText} username={review.username} rating={review.rating}/>
            )
          });
        }
      })}
    </div>
  );
}

export default Home;