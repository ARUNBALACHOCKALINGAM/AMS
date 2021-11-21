import React, { useContext, useEffect, useState } from "react"
import {Card} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useParams} from "react-router-dom"
import Axios from 'axios';
import Statecontext from "../StateContext";


Axios.defaults.baseUrl="https://ams-api.herokuapp.com/api/"


function Evaluvate() {

  const [assignmentdata,setData]=useState([]);
  const {course} = useParams();
  const [state,setState]=useState(null);
  const {data} = useContext(Statecontext);

  const [info,setInfo] = data
  


  useEffect(()=>{
    async function fetchAssigments(){
      const res= await Axios.post("/assign/course?key=6d2044ad57972d5230f586a829893ba5",{CourseID:course})
      setData(res.data);
     }
     fetchAssigments();
   },[])

   async function handleClick(e){
    // Create an object of formData
    let id= e.target.parentElement.id;
    

  }


  return (
    <>
       {assignmentdata.map((element)=>{
       return(    
       <Card id={element.AssignmentID} elevation={5} style={{padding:"20px",marginTop:"30px"}}>
       <h4>{element.AssignmentName}<VisibilityIcon  style={{width:"40px",height:"40px",backgroundColor:"steelblue",borderRadius:"50%",marginLeft:"300px",color:"white",padding:"10px"}}/></h4>
     </Card>
     )
     })}
       
    
    </>
  )
}

export default Evaluvate