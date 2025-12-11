
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch(page) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'products': return <Products />;
      case 'login': return <Login />;
      default: return <Home />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
};

