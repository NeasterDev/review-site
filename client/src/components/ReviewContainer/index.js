import React, { useState } from 'react';
import NavTabs from '../NavTabs/index';
import Footer from '../Footer/index';
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import Signup from '../pages/Signup/index';
import Write from '../pages/Write/index';
import './style.css';

function ReviewContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    return <Write />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ReviewContainer;
