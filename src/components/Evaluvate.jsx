import React, { useEffect } from "react"
import {Card} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';

function Evaluvate() {
  return (
    <>
       <Card elevation={5} style={{padding:"20px",marginTop:"30px"}}>
        <h4>Evaluvate an assignment <VisibilityIcon style={{width:"40px",height:"40px",backgroundColor:"steelblue",borderRadius:"50%",marginLeft:"300px",color:"white",padding:"10px"}}/></h4>
      </Card>
    </>
  )
}

export default Evaluvate