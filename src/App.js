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
         <Routes>
         <Route path="/" element={loggedIn ? dash : <HomeGuest/>} />
         <Route path="/teacher/:course" element={< Mainpageteacher/>} />
         <Route path="/student/:course" element={< Mainpagestudent/>} />
        </Routes>
        <Landingfooter/>
       </BrowserRouter>
    </Statecontext.Provider>
    
  
  );
}

export default App;
