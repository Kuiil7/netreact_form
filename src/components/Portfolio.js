import lingolabs from "../images/lingolabs.png";
import React from "react";
import '../styles/Main.css'
import movie_magic from "../images/movie_magic.png";
import sports_tracker from "../images/sports_tracker.png";
import node_express_handlebars from "../images/node_express_handlebars.png";

function Portfolio () {

  
    return (

<section id="section3">
<div className="container">
  <h1 className="margin_20">PORTFOLIO</h1>
  <div className="row margin_50">
    <div className="col margin_50">
        <h4>LingoLabs</h4>
        < img className="img-wrapper" src={lingolabs}  alt="project lingolabs landingpage">
    </img>
    <div className="btn_row ">


<button href="https://github.com/ShawnWhy/LingoLabs" className="btn btn-sm btn-light bg-warning btn-1">REPO</button>
 
     <button href="https://shawnyulingolabsmaster.herokuapp.com/" className="btn btn-dark btn-1 btn-sm">DEMO</button>

   </div>
        <p className="card-text text-justify"> A website where users can browse and shop for stock websites templates. </p>
        <p className="card-text text-justify"> My core responsibility was creating the registration page and technical details regarding the backend server. </p>
        <p className="card-text text-justify"> Built with:
       
       <strong> NodeJs, NPM, Express.js, MongoDB, React.js, Mongoose, Passport.js, Socket.io, and Heroku. </strong>
 </p>

    </div>

    <div class="w-100"></div>
    <div className="col margin_50">
            <h4>MOVIE MAGIC </h4>
            
    < img className="img-wrapper" src={movie_magic}  alt="project movie app with popcorn background">
   
   </img>
   
   <div className="btn_row">
        <button href="https://github.com/HowardDaniels/movie-magic/" className="btn btn-light bg-warning btn-1 btn-sm">REPO</button>
   
   <button href="https://infinite-inlet-20359.herokuapp.com/" className="btn btn-dark bg-dark btn-1 btn-sm">DEMO</button>
   </div>
        <p className="card-text text-justify">Find movies and fellow movie buffs (called "buddies") based on user input which is accessed upon signing up or logging in. </p>
        <p className="card-text text-justify ">My core responsibility was creating the registration page where the user signups/ logins, logout, and redirect (members page). *registration has bugs but work by manually refreshing after every input.
        </p>
       
        <p className="card-text text-justify   "> Built with:
         
            <strong> Express.js, NodeJs, Passport.js, MySQL, Moments.Js, Ajax, Sequelize, Dotenv, Console.Table, and Heroku. </strong>

        </p>

    </div>
    <div className="w-100">
      
    </div>
    <div className="col margin_50 ">         
    <h4>SPORTS-TRACKER</h4>    
            < img className="img-wrapper" src={sports_tracker}  alt="landing page">
            </img>
            <div className="btn_row">

<button href="https://github.com/SportsWarriorsGWU/Sports-Tracker/" className="btn btn-light bg-warning btn-1 btn-sm">REPO</button>
<button href="https://sportswarriorsgwu.github.io/Sports-Tracker/" className="btn btn-dark btn-1 btn-sm">DEMO</button>
</div>
            <p className="card-text text-justify">Sports Tracker, a website dedicated to the professional sports leagues of the United States (MLS pending). Features: stats, news, single league, individual teams, and a favorites function.</p>
            <p className="card-text text-justify">My core responsibility was layout, design, troubleshoot API calls.</p>
        <p className="card-text text-justify"> Built with: <strong>NodeJs, NPM, JQuery, Bootstrap, Bulma, Ajax, and JSON.</strong> </p>

 >
    </div>
    <div className="w-100"></div>
    <div className="col margin_50 ">
    <h4>NODE-EXPRESS-HANDLEBARS</h4>
            
            < img className="img-wrapper" src={node_express_handlebars}  alt="landing page">
            </img>
            <div className="btn_row">
          <button href="https://github.com/Kuiil7/Node-Express-Handlebars" className="btn btn-light bg-warning btn-1 btn-sm">REPO</button>
      
      <button href="https://ancient-thicket-66505.herokuapp.com/index" className="btn btn-dark bg-dark btn-1 btn-sm">DEMO</button>
    </div>
            <p className="card-text text-justify">This app, Eat-Da-Burger!, allows you to create a burger and log a list of items in a database. NodeJs and MySQL does the queries and routes while handlebars generates HTML content.</p>
            <p className="card-text text-justify"> Built with:
          <strong> HTML5, CSS3, Handlebars, NodeJs, NPM, jQuery, Express.js, MySQL, MariaDB, and JSON. </strong> </p>
   
  
    </div>
  </div>
</div>
</section>

);

  
}

export default Portfolio;