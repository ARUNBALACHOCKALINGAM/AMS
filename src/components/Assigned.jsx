import React, { useEffect, useState , useContext } from "react"
import {Card} from "@mui/material"
import {useParams, useSearchParams} from "react-router-dom"
import Axios from "axios";
import UploadIcon from '@mui/icons-material/Upload';
import { Info } from "@material-ui/icons";
import Statecontext from "../StateContext";

Axios.defaults.baseUrl="http://127.0.0.1:5000/api/"


function Assigned() {

 
  

  const [assignmentdata,setData] = useState([]);
  const [assignmentId,setId] =useState(null);
  let { course } = useParams();

  const {data} = useContext(Statecontext)

  const [info,setInfo] = data
  

  

  const [state,setState]= useState(null);

  function onFileChange(e){
    
    setState({ selectedFile: e.target.files[0] });

  };

  async function handleClick(e){
    // Create an object of formData
    let id=e.target.parentElement.id;
    console.log(id);
    console.log(e.target.parentElement.id)
    const formData = new FormData();
    formData.append("file", state.selectedFile);
      if(id==""){
        alert("invalid id")
      }else{
      const res = await Axios.post(
        `/assign/file_upload/?key=6d2044ad57972d5230f586a829893ba5&courseID=${course}&studentID=${info.id}&assignmentID=${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(res.data)
      if(res.data){
        alert("Uploaded succesfully")
      }
    }
  }


   

  
  
  

   useEffect(()=>{
    async function fetchAssigments(){
      const res= await Axios.post("/assign/course?key=6d2044ad57972d5230f586a829893ba5",{CourseID:course})
      setData(res.data);
     }
     fetchAssigments();
   },[])

   

  
  return (
    <>
    {assignmentdata.map((element)=>{
       return(info.id in element.AssignmentCompleted ? "" : <Card style={{display:"flex"}} id={element.AssignmentID} key={element.AssignmentID} elevation={5} style={{padding:"20px",marginTop:"30px"}}>
       <h4>{element.AssignmentName}</h4>
       <p>{element.AssignmentDescription}</p>
       <input type="file" onChange={onFileChange}/><UploadIcon onClick={handleClick} style={{backgroundColor:"steelblue",borderRadius:"50%",}}/>
       </Card>)
     })}
     
    </>
  )
}

export default Assigned