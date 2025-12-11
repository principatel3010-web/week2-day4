
import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">FrameboxIT</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('home')}>Home</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('about')}>About</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('products')}>Products</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('login')}>Login</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
