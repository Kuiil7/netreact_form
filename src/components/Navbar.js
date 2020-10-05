import React from "react";
import '../styles/Navbar.css'



function Navbar() {
  return (

    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand " href="home">JAM</a>
    <button class="navbar-toggler btn .btn-outline-*  " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon  "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      
      <ul className="navbar-nav  mx-auto">
        <li className="nav-item ">
          <a className="nav-link" href="/#home">HOME </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#about">ABOUT </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#profile_main">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#contact1">CONTACT</a>
        </li>
     
 
      </ul>
    </div>
  </nav>

  );
}

export default Navbar;
