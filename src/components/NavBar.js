import React from "react";
import '../styles/Main.css'
import "../styles/Aboutme.css";
import "../styles/Home.css";





function NavBar () {

  
  return (
  
       
 <div>


   <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light"  aria-hidden="false"  role="navigation">

<a className="navbar-brand " href="home">JAM</a>
<button className="nav-btn1 navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse"id="navbarSupportedContent">

    <ul className="navbar-nav  mx-auto">
        <li className="nav-item ">
            <a className="nav-link" href="/#section1">HOME </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#section2">ABOUT </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#section3">PORTFOLIO</a>
        </li>
       

    </ul>
</div>
</nav>

</div>

  );

  
}

export default NavBar;