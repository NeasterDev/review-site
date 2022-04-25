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
import { 
  ApolloProvider, 
  createHttpLink, 
  InMemoryCache, 
  ApolloClient 
} from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function ReviewContainer() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavTabs></NavTabs>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/write" component={Write} />
            <Route render={() => <h1>Wrong page!</h1>} />
          </main>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default ReviewContainer;
