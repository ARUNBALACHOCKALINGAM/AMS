import { useState } from "react";

function NavBar(props){

  const [color,setColor] = useState("");
  const [colortw,setColorTw] = useState("");
  const [colorth,setColorTh] = useState("");
  const [value,setVal] = useState("Assigned");
  props.onNavChange(value)

  function handleAssigned(e){
      setColorTw("");
      setColorTh("");
      setColor("red");
      setVal("Assigned"); 
      

  }

  function handleCompleted(e){

    setColor("");
    setColorTh("");
    setColorTw("red");
    setVal("Completed");
  
}

function handleFeedback(e){

  setColor("");
  setColorTh("red");
  setColorTw("");
  setVal("Feedback");

}

	{
		return (
            <>
            <nav>
              <ul className="navbar">
                
                <li style={{backgroundColor:color,padding:"20px",transition:"0.2s"}}><a href="#" onClick={handleAssigned}>Assigned</a></li>
                <li style={{backgroundColor:colortw,padding:"20px",transition:"0.2s"}}><a href="#" onClick={handleCompleted}>Completed</a></li>
                <li style={{backgroundColor:colorth,padding:"20px",transition:"0.2s"}}><a href="#" onClick={handleFeedback}>Feedback</a></li>
              </ul>
            </nav>
            </>
          );
	}
}


export default NavBar;