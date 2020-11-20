import React from "react";

import "../styles/NavBar.css";



function NavBar () {
return (
  
       
 <div>

<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#section1">JGAM</a>
  <button className="navbar-toggler border-0 " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/#section1">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/#section2">About Me</a>
      <a className="nav-item nav-link" href="/#section3">Portfolio</a>
 
    </div>
  </div>
</nav>



</div>

  );

  
}

export default NavBar;