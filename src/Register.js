import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";





function Register(){


    

    const[name,setusername]=useState();
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const[error,seterror]=useState(false);
    const[emailerror,setemailerror]=useState(false);
    const[passworderror,setpassworderror]=useState(false);


    const userList=JSON.parse(localStorage.getItem("registeredUser"))||[];
    function AbhishekRajGaurav(){
        userList.push({email:email,username:name,password:password});
        
        if(email===""||name===""||password===""){
       }
        else{
            localStorage.setItem("registeredUser" , JSON.stringify(userList))
        }
      }





let x = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    function Userd(e){
        let name = e.target.value;
        if(name.length<3){
            seterror(true);
        }
        else{
            seterror(false);
        }
        setusername(name)
    }

    function Handlemail(e){
       
        // var x = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	
        let email = e.target.value;
        if(!email.match(x)){
            setemailerror(true);
        }
        else{
            setemailerror(false);
        }

        setemail(email)
    }

    function Userpasswordvalidation(e){
    var xy = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  let password=e.target.value;

  if(!password.match(xy)){
       
    setpassworderror(true)


  }else{
    setpassworderror(false)

  }



    }

    function handlesubmit(e){

        e.preventDefault();
        let name =e.target[0].value;
        
        if(name.length<3){
            seterror(true);
        }
        else{
            seterror(false);
        }

        let email = e.target[1].value;
       
        if(email.match(x)){
            setemailerror(true);
        }
        else{
            setemailerror(false);
        }
        if((!name.length<3)&&(!email.match(x))){
            alert("form submitted")
            alert("name" +email +"email" +name)
        }
        
        
    }


    
         
      

  













    return(
        <>
          <center> <h1 style={{color:'white'}}> Register  </h1> </center> 
    <form onSubmit={handlesubmit}>
        <div class="container"> 

        <label>Email: </label> 
            <input type="email" placeholder="Enter Email" name="email" onChange={Handlemail} value={email} required/>
            <br/>
            {emailerror?<span style={{color:'red'}}>Invalid email</span>:""}
            <br/>
            <label>Username : </label> 
            <input type="text" placeholder="Enter Username" name="username" onChange={Userd} value={name} required/>
            <br/>
            {error?<span style={{color:'red'}}>Name must be greater than 3</span>:""}
            <br/>
            <label>Password : </label> 
            <input type="password" onChange={Userpasswordvalidation} placeholder="Enter Password" name="password" value={password} required/>
                <br/>
                {passworderror===true ?<span style={{color:'red'}}>Invalid password</span>:""}
                <br/>
            <button type="submit"  onClick={()=>{
             AbhishekRajGaurav()}}
            
            style={{ color:"white",fontSize:'21px', fontWeight: 'bold' , textDecoration: 'none' }}>Register</button> 
             <i>Already a member?</i>
            <button type="button" class="cancelbtn"><Link to="/Login"   style={{color:"white",fontSize:'15px', fontWeight: 'bold' , textDecoration: 'none' }}>Login</Link></button> 
            
        </div> 
    </form>
     
       
        </>
    )
}
export default Register;