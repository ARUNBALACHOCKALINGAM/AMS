import { Card } from "@mui/material"
import { padding } from "@mui/system"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Coursestaught() {
  return (
    <>
      <h1 style={{textAlign:"center",backgroundColor:"steelblue",color:"white"}}>Choose Course</h1>
      <Card elevation={5} style={{padding:"20px"}}>
          <Link to="/teacher/dashboard">CSE 2007</Link>
          <p>Credits: 4</p>
      </Card>
    </>
  )
}

export default Coursestaught