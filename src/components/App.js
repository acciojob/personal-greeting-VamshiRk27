
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName] = useState("");

  function show(){
    name=setName(document.getElementById("user").value);
  }
  return (
    <div>
      <label>Enter your name:</label> <br/>
        <input type="text" onChange={show} id="user"/>
        {
          name!="" && <p>Hello {name}!</p>
        }
    </div>
  )
}

export default App
