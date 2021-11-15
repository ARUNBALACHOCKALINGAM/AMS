import React, { useEffect,useState } from "react"
import NavBarTeacher from "./NavBarTeacher";
import Assign from "./Assign";
import Evaluvate from "./Evaluvate";
import Page from "./Page";

function Mainpageteacher() {
    const [comp,setComp]= useState("Assigned");
    function handlenavChange(props){
      setComp(props);
    }
  return (
    <>
      <Page title="Main Page">
          <NavBarTeacher onNavChange={handlenavChange}></NavBarTeacher>
          {comp == "Assign" ? <Assign/> : ""}
          {comp==="Evaluvate" ? <Evaluvate/> : ""}
      </Page>
    </>
  )
}

export default Mainpageteacher