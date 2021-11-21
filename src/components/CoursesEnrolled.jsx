import { Card } from "@mui/material"
import { padding } from "@mui/system"
import React, { useEffect,useContext } from "react"
import Axios from 'axios';
import {Link} from "react-router-dom"
import Statecontext from "../StateContext"
import Coursestaught from "./Coursestaught";


function CoursesEnrolled() {

  const {login,data} = useContext(Statecontext);
  const [info,setInfo]= data;


  
  return (

    <>
     <h1 style={{textAlign:"center",backgroundColor:"black",color:"white"}}>Courses enrolled</h1>
        {typeof info === "undefined" ? "" : Object.keys(info.CourseID).map((course)=>{
            return (
          <Card elevation={5} style={{padding:"20px"}}>
            <Link to={`/student/${course}`}>{course}</Link>
            <p>Credits:{info.CourseID[`${course}`]}</p>
        </Card>)
          })}
    </>
  )
}

export default CoursesEnrolled