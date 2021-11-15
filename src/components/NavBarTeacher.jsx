import { useState } from "react";

function NavBarTeacher(props){

  const [color,setColor] = useState("");
  const [colortw,setColorTw] = useState("");
  const [colorth,setColorTh] = useState("");
  const [value,setVal] = useState("Assigned");
  props.onNavChange(value)

  function handleAssign(e){
      setColorTw("");
      setColorTh("");
      setColor("red");
      setVal("Assign"); 
      

  }

  function handleEvaluvate(e){

    setColor("");
    setColorTh("");
    setColorTw("red");
    setVal("Evaluvate");
  
}

function handleFeedback(e){

    setColor("");
    setColorTw("");
    setColorTh("red");
    setVal("Feedback");
  
  }



	{
		return (
            <>
            <nav>
              <ul className="navbar">
                
                <li style={{backgroundColor:color,padding:"20px",transition:"0.2s"}}><a href="#" onClick={handleAssign}>Assigned</a></li>
                <li style={{backgroundColor:colortw,padding:"20px",transition:"0.2s"}}><a href="#" onClick={handleEvaluvate}>Evaluvate</a></li>
                <li style={{backgroundColor:colorth,padding:"20px",transition:"0.2s"}}><a href="#" onClick={handleFeedback}>Feedback</a></li>
              </ul>
            </nav>
            </>
          );
	}
}


export default NavBarTeacher;