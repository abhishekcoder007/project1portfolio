import React from "react";
import './Navi.css';
import { useState} from "react";
import {Link} from "react-router-dom";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PersonIcon from '@mui/icons-material/Person';



function Navi(){


   const[change,setchange]=useState('false')
     

   function storeicon(){
       setchange(!change)
   }
      


   return(
       <>
   <nav>
       
       <div className="main">
        {<PersonIcon style={{fontSize:'55px'}} /> }

       <div  className="mainsidenav"> </div>

           <div className={change===true ? "mobile":"main1"}>
           
            <div><Link style={{fontSize:'21px', fontWeight: 'bold' , textDecoration: 'none' }}> Home </Link> </div>
             
            <div><Link to="/Login" style={{fontSize:'21px', fontWeight: 'bold' , textDecoration: 'none' }}>Login</Link></div>
            <div><Link to="/Register" style={{ fontSize:'21px',fontWeight: 'bold' ,textDecoration: 'none' }}>Register </Link></div>
            <div><Link to="/AboutUs" style={{ fontWeight: 'bold' ,fontSize:'21px', textDecoration: 'none' }}>About Us</Link></div>
               
           </div>
           
               <div className="main2">

             
                   
               {/* <div className="divsearch">search:<input placeholder="enter search"/></div> */}
               
               
               </div>

               <button className="hiddenicon" onClick={storeicon}>{<WebAssetIcon />}</button>
                   

           </div>
       </nav>
       <div className="mainbody">
                       <div className="body1">  
                       <div className='center1'>
                           <h1>Welcome To My Website</h1>
                           
                            <h4>In this website we have created three pages :</h4>

                            <ul style={{fontSize:'21px', fontWeight: 'bold' , textDecoration: 'none' }}>
                                <li> Login Page</li>
                                <li> Register Page</li>
                                <li> About us Page</li>

                            </ul>
                           

<p>In Login Page, if user is not registered we have made register button
 which redirects the user to register page and also we have stored the 
 emails in local storage for the convenience of the users.</p>
<p>In Register Page, if user is already registered we have made Login button which redirects the user to Login Page.</p>
<p>In About Us Page, we write about the members of the group. </p>
                           
                            </div>
                             </div>  
                   </div>
       
       
       
       </>
   )
}
export default Navi;