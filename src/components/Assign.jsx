import React, { useEffect, useState } from "react"
import {Card} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Page from "./Page";
import DialogForm from "./DialogForm";
import { useParams} from "react-router-dom";
import Axios from "axios";


Axios.defaults.baseUrl="http://127.0.0.1:5000/api/"


function Assign() {
  const [open,setOpen]=useState(false);
  const [data,setData]=useState([]);
  let { course } = useParams();

  
  

   useEffect(()=>{
    async function fetchAssigments(){
      const res= await Axios.post("/assign/course?key=6d2044ad57972d5230f586a829893ba5",{CourseID:course});
      setData(res.data);
      
     }
     fetchAssigments();
   },[])
       
  
  
  function handleClick(){
      setOpen(true);
  }
   
  function handleClose(){
    setOpen(false);
  }

  return (
    <>
          
        
    {data.map((element)=>{
       return( <Card key={element.AssignmentID} elevation={5} style={{padding:"20px",marginTop:"30px"}}>
       <h4>{element.AssignmentName}</h4>
       <p>{element.AssignmentDescription}</p>
       </Card>)
     })}
      <div>
        <Card elevation={5} style={{padding:"20px",marginTop:"30px"}}>
        <h4>Add an assignment <span onClick={handleClick}><AddIcon style={{backgroundColor:"steelblue",borderRadius:"50%",marginLeft:"400px"}}/></span></h4>
        </Card>
     <DialogForm open={open} handleClose={handleClose}/>
     </div>  
    </>
  )
}

export default Assign