import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebse";

// import Login from './pages/Login/Login'


function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate("/")
      }

      else{
        console.log("Logged Out");
        navigate('/login');
      }

    })

  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/player/:id" element={<Player/>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
