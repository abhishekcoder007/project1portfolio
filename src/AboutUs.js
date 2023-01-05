
import "./AboutUs.css"
import React from "react";

function AboutUs(){
     


  

return(
<div>
<div className="about-section">
  <h1 style={{color: 'white'}}>About Us  </h1>
  <p>Some information about who we are and what we do.</p>
   
</div>

<h2 style={{color: 'white'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="./law.png" alt="Jane" style={{width:'23%'}}/>
      <div className="container">
        <h2>Law Kumar</h2>
        <p className="title">Age-26</p>
        <p>Hobbies:- Playing Cricket, Volley ball</p>
        <p>Luv19641@gmail.com</p>
        
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="./prachi.png" alt="John" style={{width:"20%"}}/>
      <div className="container">
        <h2>Prachi Gupta</h2>
        <p className="title">Age-24</p>
        <p>Hobbies:- Reading Books</p>
        <p>Guptaprachi2098@gmail.com</p>
      </div>
    </div>
  
  </div>
  
  <div className="column">
    <div className="card">
      <img src="./aks.png" alt="John" style={{width:"25%"}}/>
      <div className="container">
        <h2>AkshayKumar Bhalekar</h2>
        <p className="title">Age-24</p>
        <p>Hobbies: Singing song, Rapper</p>
        <p>AkshayKumarbhalekar1522@gmail.com</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="./photoabhishek1.png" alt="John" style={{width:"30%" }}/>
      <div className="container">
        <h2>Abhishek Raj Gaurav</h2>
        <p className="title">Age-25</p>
        <p>Hobbies: Watching Movies, Reading Books</p>
        <p>Abhishekrajgaurav7@gmail.com</p>
        
      </div>
    </div>
  </div>
</div>

</div>
)


}
export default AboutUs;