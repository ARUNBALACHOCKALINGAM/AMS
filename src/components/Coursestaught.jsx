import { Card } from "@mui/material"
import { padding } from "@mui/system"
import React, { useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import Statecontext from "../StateContext"

function Coursestaught() {
  
  const {login,data} = useContext(Statecontext);
  const [info,setInfo]= data;

  return (
    
    <>
      <h1 style={{textAlign:"center",backgroundColor:"steelblue",color:"white"}}>Your Courses</h1>
      {typeof info === "undefined" ? "" : Object.keys(info.CourseID).map((course)=>{
            return (
          <Card key={course} elevation={5} style={{padding:"20px"}}>
            <Link to={`/teacher/${course}`}>{course}</Link>
            <p>Credits:{info.CourseID[`${course}`]}</p>
        </Card>)
          })}
    </>
  )
}

export default Coursestaught