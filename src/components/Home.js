import React from "react";
import "../styles/Home.css";


function Home() {
  return (
    

    <div id="home" aria-hidden="false">
      

   <center>
   <h1 id="name" className="fade-in" >JAM</h1>
   <h2 id="position">Full Stack Developer</h2>
   <h3 id="location">San Diego, CA </h3>
    <div id="socialContacts" className="row">
   
     
<li className="list-inline-item">

          <a className="btn  btn-social text-center rounded-circle" href="https://github.com/Kuiil7"> 
          <i className="fa fa-fw fa-github fa-2x" ></i></a>
          </li> 
     <li className="list-inline-item">

          <a className="btn  btn-social text-center rounded-circle" href="https://www.linkedin.com/in/joey-aguilera-merino-8298b6193/">
              <i className="fa fa-linkedin fa-2x" ></i> </a>
          
   </li>      <li className="list-inline-item">


<a className="btn  btn-social text-center rounded-circle"  href="https://onedrive.live.com/download?cid=657CABE1B252F7DF&resid=657CABE1B252F7DF%212009&authkey=ADu8A0SMy0D98-E" > 
<i class="fa fa-file-text fa-2x" ></i>

 </a>

</li>       

 
</div>

     </center>
  </div>


  );


}

export default Home;