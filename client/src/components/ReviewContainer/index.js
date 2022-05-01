// react
import React from 'react';
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
import './style.css';
import Write from '../Write';

function ReviewContainer() {
  return (
      <Router>
        <div>
          <NavTabs></NavTabs>
          <main>
            <Write></Write>
            <Route exact path="/" component={Home} />
            <Login></Login>
            <Signup></Signup>
            <Route exact path="/profile" component={Profile} />
            {/* <Route render={() => <h1>Wrong page!</h1>} /> */}
          </main>
          <Footer></Footer>
        </div>
      </Router>
  );
}

export default ReviewContainer;
