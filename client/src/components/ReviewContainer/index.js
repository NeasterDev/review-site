// react
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// component root
import NavTabs from '../NavTabs/index';
import Footer from '../Footer/index';

// pages
import Home from '../pages/Home';
import Login from '../pages/Login/index';
import Signup from '../pages/Signup/index';
import {Profile} from '../pages/Profile';


// style sheet
import Write from '../Write';

function ReviewContainer() {
  const [searchLocation, setSearchLocation] = useState('');

  const handleLocation = (e) => {
    e.preventDefault();
    const searchFormEl = document.querySelector('.searchInput');
    setSearchLocation(searchFormEl.value);
  }
  return (
      <Router>
        <div>
          <NavTabs location={searchLocation} handleLocation={handleLocation}></NavTabs>
          <main className=' min-height-100'>
            <Write></Write>
            <Route exact path="/" render={() => <Home location={searchLocation}/>} />
            <Login></Login>
            <Signup></Signup>
            <Route path="/profile" component={Profile} />
            {/* <Route render={() => <h1>Wrong page!</h1>} /> */}
          </main>
          <Footer></Footer>
        </div>
      </Router>
  );
}

export default ReviewContainer;
