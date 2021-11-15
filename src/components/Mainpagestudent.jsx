import React, { useEffect,useState } from "react"
import NavBar from "./NavBar";
import Page from "./Page";
import Assigned from "./Assigned";
import Completed from "./Completed";
import Feedback from "./Feedback"

function Mainpagestudent() {
    const [comp,setComp]= useState("Assigned");
    function handlenavChange(props){
      setComp(props);
    }
  return (
    <>
      <Page title="Main page">
          <NavBar onNavChange={handlenavChange}></NavBar>
          {comp == "Assigned" ? <Assigned/> : ""}
          {comp==="Completed" ? <Completed/> : ""}
          {comp==="Feedback" ? <Feedback/> : ""}
      </Page>
    </>
  )
}

export default Mainpagestudent