import React,{Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Statecontext from "./StateContext";


import Landingfooter from './components/Landingfooter';
import Header from './components/Header';
import TeacherDashboard from './components/TeacherDashboard'
import Dashboard from './components/Dashboard';
import LoadingIcon from "./components/LoadingIcon";
import { useState } from "react";

const  Mainpageteacher= React.lazy(() => import("./components/Mainpageteacher"));
const Mainpagestudent= React.lazy(() => import("./components/Mainpagestudent"));
const HomeGuest= React.lazy(() => import("./components/HomeGuest"));






function App() {

  const [loggedIn,setLoggedIn]=useState(false);
  const [data,setData] = useState({
    CourseID:{},
    id: "",
    message: "",
    name: "",
    status: "",
    type: "",
    username: "",
  });
  const [type,setType] = useState("");
  



  const dash = type==="student" ? (<Dashboard/>) : (<TeacherDashboard/>);

  

  
  return (
    
    <Statecontext.Provider value={{login:[loggedIn,setLoggedIn],data:[data,setData],type:[type,setType]}}>
      <BrowserRouter>
        <Header/>
        <Suspense fallback={<LoadingIcon/>}>
         <Routes>
         <Route path="/" element={loggedIn ? dash : <HomeGuest/>} />
         <Route path="/teacher/:course" element={< Mainpageteacher/>} />
         <Route path="/student/:course" element={< Mainpagestudent/>} />
        </Routes>
        </Suspense>
        <Landingfooter/>
       </BrowserRouter>
    </Statecontext.Provider>
    
  
  );
}

export default App;
