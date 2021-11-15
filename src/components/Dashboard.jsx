import React, { useEffect, useContext, useState } from "react";
import Page from "./Page";
import NavBar from "./NavBar"
import Axios from "axios";
import CoursesEnrolled from "./CoursesEnrolled";

function Dashboard() {
  
 

  return (
    <Page title="Dashboard">
        <>
         <CoursesEnrolled/>
        </>
    </Page>
  );
}

export default Dashboard;
