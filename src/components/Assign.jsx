import React, { useEffect } from "react"
import {Card} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

function Assign() {
  return (
    <>
      <Card elevation={5} style={{padding:"20px",marginTop:"30px"}}>
        <h4>Add an assignment <AddIcon style={{backgroundColor:"steelblue",borderRadius:"50%",marginLeft:"400px"}}/></h4>
      </Card>
     
    </>
  )
}

export default Assign