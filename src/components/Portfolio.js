import lingolabs from "../images/lingolabs.png";
import React from "react";
import '../styles/Portfolio.css'
import movie_magic from "../images/movie_magic.png";
import sports_tracker from "../images/sports_tracker.png";


function Portfolio () {
 return (

<section id="section3">
<div class="container">
    <h1> PORTFOLIO</h1>
 <div class="col">
<div class="col-sm">
<h4>LingoLabs</h4>
    < img className="img-wrapper padding_10" src={lingolabs}  alt="project lingolabs landingpage">
    </img>
<div className="padding_10">
<a href="https://github.com/ShawnWhy/LingoLabs" className=" btn-sm btn-light bg-warning btn-1 img-wrapper ">REPO</a>
 
 <a href="https://shawnyulingolabsmaster.herokuapp.com/" className=" btn-dark btn-1 btn-sm img-wrapper">
    DEMO
     </a>
</div>

     <p className=" text-justify"> A website where users can browse and shop for stock websites templates. </p>
        <p className="text-justify"> My core responsibility was creating the registration page and technical details regarding the backend server. </p>
        <p className="text-justify"> Built with:
       
       <strong> NodeJs, NPM, Express.js, MongoDB, React.js, Mongoose, Passport.js, Socket.io, and Heroku. </strong>
 </p>


    </div>
    <div class="col-sm">
    <h4>MOVIE MAGIC </h4>
            
            < img className="img-wrapper padding_10" src={movie_magic}  alt="project movie app with popcorn background">
           
           </img>
        
      <div className="padding_10">
      <a href="https://github.com/ShawnWhy/LingoLabs" className=" btn-sm btn-light bg-warning btn-1 img-wrapper">REPO</a>
 <a href="https://shawnyulingolabsmaster.herokuapp.com/" className=" btn-dark btn-1 btn-sm img-wrapper">
    DEMO
     </a> 
          </div>  
     
     <p className=" text-justify">Find movies and fellow movie buffs (called "buddies") based on user input which is accessed upon signing up or logging in. </p>
        <p className=" text-justify ">My core responsibility was creating the registration page where the user signups/ logins, logout, and redirect (members page). *registration has bugs but work by manually refreshing after every input.
        </p>
       
        <p className=" text-justify   "> Built with:
         
            <strong> Express.js, NodeJs, Passport.js, MySQL, Moments.Js, Ajax, Sequelize, Dotenv, Console.Table, and Heroku. </strong>

        </p>

     </div>
    <div class="col-sm">
    <h4>SPORTS-TRACKER</h4>    
 < img className="img-wrapper padding_10" src={sports_tracker}  alt="landing page">
            </img>
 <div className="padding_10 img-wrapper">
 <a href="https://github.com/SportsWarriorsGWU/Sports-Tracker/" className=" btn-light bg-warning btn-1 btn-sm img-wrapper">REPO</a>
<a href="https://sportswarriorsgwu.github.io/Sports-Tracker/" className=" btn-dark btn-1 btn-sm img-wrapper">DEMO</a>

</div>

<p className=" text-justify">Sports Tracker, a website dedicated to the professional sports leagues of the United States (MLS pending). Features: stats, news, single league, individual teams, and a favorites function.</p>
            <p className=" text-justify">My core responsibility was layout, design, troubleshoot API calls.</p>
        <p className=" text-justify"> Built with: <strong>NodeJs, NPM, JQuery, Bootstrap, Bulma, Ajax, and JSON.</strong> </p>

             
    </div>
    <div class="col-sm">
    <h4 >Note Taker</h4>

    <img src="https://i.imgrz.com/6FV2.gif" className="padding_10 img-wrapper" alt="notetaker demo" />

    <div className="padding_10 img-wrapper">

    <a href="https://github.com/Kuiil7/Note-Taker" className=" btn-light bg-warning btn-1 btn-sm">REPO</a>
      
      <a href="https://kuiil7.github.io/Note-Taker" className=" btn-dark btn-1 btn-sm">DEMO</a>
    </div>
 

    <p className="text-justify">This application was created to write, save, and delete text notes. This is for any type of user that wants to track any amount of information. Backend data is stored and retrieved in JSON format via Express.</p>

    <p className="text-justify"> Built with:<strong> HTML5, CSS3, Bootstrap, NodeJs, NPM, jQuery, Express.js, Ajax, and
JSON </strong>
 </p>

    </div>
    <div class="col-sm">
    <h4 >Eat-da-Burger </h4>

    
    <img src="https://i.imgrz.com/6GZN.gif" className="img-wrapper padding_10" alt="movie magic signup" />
    <div className=" padding_10">
    <a href="https://github.com/SportsWarriorsGWU/Sports-Tracker/" className=" btn-light bg-warning btn-1 btn-sm">REPO</a>
      <a href="https://sportswarriorsgwu.github.io/Sports-Tracker/" className="btn-1 btn-sm btn-dark">DEMO</a>

    </div>
    <p className=" text-justify   " >Sports Tracker, a website dedicated to the professional sports leagues of the United States (MLS pending). Features: stats, news, single league, individual teams, and a favorites function.</p>
    <p className=" text-justify   " >My core responsibility was layout, design, troubleshoot API calls.</p>
    <p className=" text-justify   " > Built with: <strong>NodeJs, NPM, JQuery, Bootstrap, Bulma, Ajax, and JSON.</strong> </p>



</div>

  </div>
</div>

</section>

);

  
}

export default Portfolio;