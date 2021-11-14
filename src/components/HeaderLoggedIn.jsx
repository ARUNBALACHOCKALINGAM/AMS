import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";


function HeaderLoggedIn(props) {
  
  function handleLogout(e) {
       console.log(e.target.value);
  } 

  function handleSearch(e) {
    e.preventDefault();
  
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a
        onClick={handleSearch}
        href="#"
        className="text-white mr-2 header-search-icon"
      >
        <i className="fas fa-search"></i>
      </a>
      <Link to={`/profile`} className="mr-2">
        <img className="small-header-avatar" src="" />
      </Link>
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
