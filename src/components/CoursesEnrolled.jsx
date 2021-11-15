import { Card } from "@mui/material"
import { padding } from "@mui/system"
import React, { useEffect } from "react"
import {Link} from "react-router-dom"

function CoursesEnrolled() {
  return (
    <>
      <h1 style={{textAlign:"center",backgroundColor:"steelblue",color:"white"}}>Courses enrolled</h1>
      <Card elevation={5} style={{padding:"20px"}}>
          <Link to="/student/dashboard">CSE 2007</Link>
          <p>Credits: 4</p>
      </Card>
    </>
  )
}

export default CoursesEnrolled