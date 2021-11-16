import React, { useEffect, useState } from "react"
import {Card} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useParams} from "react-router-dom"
import Axios from 'axios';

Axios.defaults.baseUrl="https://ams-api.herokuapp.com/api/"


function Evaluvate() {

  const [data,setData]=useState([]);

  const {course} = useParams();


  useEffect(()=>{
    async function fetchAssigments(){
      const res= await Axios.post("/assign/course?key=6d2044ad57972d5230f586a829893ba5",{CourseID:course})
      setData(res.data);
     }
     fetchAssigments();
   },[])



  return (
    <>
       {data.map((element)=>{
       return(    
       <Card id={element.AssignmentID} elevation={5} style={{padding:"20px",marginTop:"30px"}}>
       <h4>{element.AssignmentName}<VisibilityIcon onClick={handleClick} style={{width:"40px",height:"40px",backgroundColor:"steelblue",borderRadius:"50%",marginLeft:"300px",color:"white",padding:"10px"}}/></h4>
     </Card>
     )
     })}
       
    
    </>
  )
}

export default Evaluvate