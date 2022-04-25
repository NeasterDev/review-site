import React, { useState } from 'react';

// component root
import NavTabs from '../NavTabs/index';
import Footer from '../Footer/index';

// pages
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import Signup from '../pages/Signup/index';
import Write from '../pages/Write/index';

//style sheet
import './style.css';

// packages
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function ReviewContainer() {
  return (
    <ApolloProvider>
      <Router>
        <div>
          <NavTabs></NavTabs>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/write" component={Write} />
          </main>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default ReviewContainer;
