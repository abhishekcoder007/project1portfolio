
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';


import Navi from './Navi';
import Login from './Login';
import Register from './Register';
import AboutUs from './AboutUs';







function App() {
  return (
    <div className="App">
   
   
   <Routes>
   <Route path="/" element = {<Navi/>}/>
   <Route exact path="/Home" element = {<Home/>}/>
   <Route exact path="/AboutUs" element = {<AboutUs/>}/>
   <Route exact path="/Login" element = {<Login/>}/>
   <Route exact path="/Register" element = {<Register/>}/>
   <Route exact path="/SignUp" element = {<Register/>}/>
    
   </Routes>
  
    </div>
  );
}

export default App;
