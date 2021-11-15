import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Statecontext from "../StateContext";


function HeaderLoggedIn(props) {

  const [context,setContext] = useContext(Statecontext);
  
  function handleLogout(e) {
       console.log(e.target.value);
       setContext(false);
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
