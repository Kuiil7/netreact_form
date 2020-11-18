import React from "react";
import '../styles/Main.css';
import "../styles/Aboutme.css";
import "../styles/Home.css";





function Main () {

  
  return (
  
       
<div>
<section id="section1" aria-hidden="false">
      


<div>
<h1 id="name" className="fade-in" >Jose Aguilera Merino</h1>
</div>

  <div id="contact_info">

  <h2 id="position">Full Stack Developer</h2>
      <a href="mailto:jgamerino@gmail.com"className="text-white" id="email" >
        <h5 >
        jgamerino@gmail.com
          </h5>
          </a>
   
      <h6 id="location" className="text-white">San Diego, CA </h6>

</div>



</section>
<section>
<div className=" bg-warning " >    
<center>   
<div className="row">
  <div className="col-4 col-sm-4">
    <a className="btn    rounded-circle" href="https://github.com/Kuiil7"> 
        <h5 >GitHub</h5>
    </a>
    </div>
  <div className="col-4 col-sm-4">

    <a className="btn    rounded-circle" href="https://www.linkedin.com/in/joey-aguilera-merino-8298b6193/">
        <h5 > LinkedIn</h5>
     </a>
    </div>
  <div className="col-4 col-sm-4">
    <a className="btn   "  href="https://onedrive.live.com/download?cid=657CABE1B252F7DF&resid=657CABE1B252F7DF%212009&authkey=ADu8A0SMy0D98-E" > 
        <h5 > Resume</h5> 
    </a>
       
    </div>
</div>
</center>


</div>
  
</section>

</div>

  );

  
}

export default Main;