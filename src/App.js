import { BrowserRouter, Routes, Route } from "react-router-dom";

import Statecontext from "./StateContext";

import HomeGuest from './components/HomeGuest';
import Landingfooter from './components/Landingfooter';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TeacherDashboard from './components/TeacherDashboard';
import CoursesEnrolled from "./components/CoursesEnrolled";
import Mainpageteacher from "./components/Mainpageteacher";
import Mainpagestudent from "./components/Mainpagestudent";
import { useState } from "react";



function App() {

  const [loggedIn,setLoggedIn]=useState(false)

  
  return (
    
    <Statecontext.Provider value={[loggedIn,setLoggedIn]}>
      <BrowserRouter>
        <Header/>
         <Routes>
         <Route path="/" element={loggedIn? <Dashboard/> : <HomeGuest/>} />
         <Route path="/teacher/dashboard/" element={< Mainpageteacher/>} />
         <Route path="/student/dashboard/" element={< Mainpagestudent/>} />
        </Routes>
        <Landingfooter/>
       </BrowserRouter>
    </Statecontext.Provider>
    
  
  );
}

export default App;
