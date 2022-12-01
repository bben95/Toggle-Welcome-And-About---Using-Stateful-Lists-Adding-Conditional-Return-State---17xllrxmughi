import React,{useState} from "react";
import "../styles/App.css";

const App = () => {
  const[isToggle,setToggle]=useState(true);
  return (
    <div id="main">
    {isToggle && <div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div>
    }
    {!isToggle && <div id="about-div">
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>
}
      <button id="toggle" onClick={(e)=>{ if(e.detail===1)setToggle(false);if(e.detail===2)setToggle(true);if(e.detail===3)setToggle(true);}}>Toggle</button>
    </div>
  );
};

export default App;
