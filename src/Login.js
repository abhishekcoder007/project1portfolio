import React, { useState } from "react";
import "./Home.css";
import {Link} from "react-router-dom";


function Login(){

    const [email,setemail]= useState("");
    const [password,setpassword]=useState('');

    const UserName = localStorage.getItem('email')
    ? localStorage.getItem('email'):"admin@admin.com";

    const UserPassword = localStorage.getItem("password")?localStorage.getItem('password'):'admin';


    function Submitform(e){
        e.preventDefault();

        if(email === UserName && password===UserPassword ){

           alert("Login sucessfull")
        }
        


    }




    return(
        <>
     
     <center> <h1 style={{color:'white'}}> Login  </h1> </center> 
    <form onSubmit={Submitform}>
        <div class="container"> 

            <label>Username : </label> 
            <input type="text" placeholder="Enter Username" name="username" required/>

            <label>Password : </label> 
            <input type="password" placeholder="Enter Password" name="password" required/>

            <button type="submit" style={{ fontSize:'21px', color:'white', fontWeight: 'bold' ,textDecoration: 'none' }}>Login</button> 
             <i>Don't have account?</i>
            <button type="button" class="cancelbtn"> <Link to="/SignUp" style={{ fontSize:'15px', fontWeight: 'bold' ,textDecoration: 'none' ,color:'white'}}>Register</Link></button> 
            
        </div> 
    </form>
        </>
    )
}
export default Login;