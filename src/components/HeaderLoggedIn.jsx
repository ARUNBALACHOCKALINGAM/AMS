import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Statecontext from "../StateContext";


function HeaderLoggedIn(props) {


  const {login,data} = useContext(Statecontext);
  const [loggedin,setLoggedIn]=login;
  
  function handleLogout(e) {
       setLoggedIn(false);
  } 


  return (
    <div className="flex-row my-3 my-md-0">
  
      <Link className="btn btn-sm btn-success mr-2" to="/">
        VIEW COURSES
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
