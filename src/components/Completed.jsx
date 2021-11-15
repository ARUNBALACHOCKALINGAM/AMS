import React, { useContext, useEffect, useState } from "react"
import {Card} from "@mui/material"
import Axios from "axios"
import Statecontext from "../StateContext"

import { useParams} from "react-router-dom";



Axios.defaults.baseUrl="https://ams-api.herokuapp.com/api/"

function Completed() {
 

  const {data} = useContext(Statecontext);
  const [info,setInfo]=data;
  const array= [];
  const marks = [];
   
  
  const [assignmentdata,setData] = useState([])
  const {course} = useParams();
  
  useEffect(()=>{
    async function fetchAssigments(){
      const res= await Axios.post("/assign/course?key=6d2044ad57972d5230f586a829893ba5",{CourseID:course})
      setData(res.data);
      
     }
     fetchAssigments();
   },[])

   {assignmentdata.map((element)=>{
    {Object.keys(element.AssignmentCompleted).map((completed)=>{
          array.push(completed);
          marks.push(element.AssignmentCompleted[{completed}])
    })}
  })}

  const assignment = [];
  console.log(array);
  console.log(info.id);

  assignmentdata.map((element)=>{
   Object.keys(element.AssignmentCompleted).map((completed)=>{
      return (completed == info.id ? assignment.push(element.AssignmentName) : "")
    })
  })
  

  console.log(assignment)



  return (
    <>
     
        {assignment.map((element)=>{
            return (<Card style={{display:"flex"}} key={element.AssignmentID} elevation={5} style={{padding:"20px",marginTop:"30px"}}>
            <h4>{element}</h4>
            </Card>)
            })}
     
  </>
  )
}

export default Completed