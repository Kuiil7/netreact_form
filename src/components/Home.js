import React from "react";
import "../styles/Home.css";


function Home() {
  return (
    

    <div id="home"    >
      

   <center>
   <h1 id="name" className="fade-in" >JAM</h1>
   <h2 id="position">full stack developer</h2>
   <h3 id="location">San Diego, CA </h3>
    <div id="socialContacts" className="row">
   
     
<li className="list-inline-item">

          <a className="btn  btn-social text-center rounded-circle" href="https://github.com/Kuiil7"> 
          <i className="fa fa-fw fa-github fa-2x"></i></a>
          </li> 
     <li className="list-inline-item">

          <a className="btn  btn-social text-center rounded-circle" href="https://www.linkedin.com/in/jose-merino-8298b6193/">
              <i className="fa fa-linkedin fa-2x"></i> </a>
          
   </li>      <li className="list-inline-item">


<a className="btn  btn-social text-center rounded-circle"  href="https://docs.google.com/document/export?format=docx&id=1F_EZh4KYrfxbfYR_6iNQ_-FffVv4qDx2-2kgqL54P1M" > 
<i class="fa fa-file-text fa-2x" aria-hidden="true"></i>

 </a>

</li>       

 
</div>

     </center>
  </div>


  );


}

export default Home;