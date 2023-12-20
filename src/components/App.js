
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName] = useState("");

  function show(){
    name=setName(document.getElementById("user").value);
  }
  return (
    <div>
      <p>Enter your name:</p> <br/>
        <input type="text" onChange={show} id="user"/>
        {
          name!="" && <p>Hello {name}!</p>
        }
    </div>
  )
}

export default App
