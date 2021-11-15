import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Statecontext from "../StateContext";

import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn";


function Header(props) {

  const {login,data} = useContext(Statecontext);

  const [loggedin,setLoggedIn]=login;

  const headerContent = loggedin ? (
    <HeaderLoggedIn />
  ) : (
    <HeaderLoggedOut />
  );

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            AMS
          </Link>
        </h4>
        {headerContent}
      </div>
    </header>
  );
}

export default Header;
