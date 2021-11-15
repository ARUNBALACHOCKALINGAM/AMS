import React, { useEffect, useContext, useState } from "react";
import Page from "./Page";
import NavBarTeacher from "./NavBarTeacher"
import Axios from "axios";
import Assign from "./Assign";
import Evaluvate from "./Evaluvate";
import Coursestaught from "./Coursestaught";

function TeacherDashboard() {
  


  return (
    <Page title="Dashboard">
        <>
          <Coursestaught/>
        </>
    </Page>
  );
}

export default TeacherDashboard;