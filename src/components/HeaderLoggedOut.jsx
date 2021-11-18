import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Statecontext from "../StateContext";

Axios.defaults.baseUrl="https://ams-api.herokuapp.com/api/"


function HeaderLoggedOut(props) {
  

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {login,data,type} = useContext(Statecontext);

  const [loggedin,setLoggedIn]=login;
  const [info,setInfo]=data;
  const [access,setAcess]=type;
  
  
  async function handleSubmit(e) {
      
    e.preventDefault();

       const res=await Axios.post("/auth/login?key=6d2044ad57972d5230f586a829893ba5",{
        username:username,
        password:password,  
      })
      if(res.data.status=="true" && res.data.type=="student"){
           setLoggedIn(true);
           setAcess("student");
      }else if(res.data.status=="true" && res.data.type=="prof"){
        setLoggedIn(true);
        setAcess("teacher");
      }else{
        setLoggedIn(false);
      }
      setInfo(res.data);
 
  } 

 

  return (

    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>

  );
}

export default HeaderLoggedOut;
