 import { useState } from "react";
import React  from "react";


 function ToDoApp (){
    const[input ,setInput] =useState("") 
    function handleInput(event){
        setInput(event.target.value)
    }
    return(
        <div>
            <hi> ToDo App</hi>
            <input type="text" value={input} onChange={handleInput}  placeholder="enter the task"/>
            <br/>
            <br/>
            <br/>
            <button> Add ToDo</button>
            <ul>
                <li>list</li>
            </ul>

        </div>
    )
 }

 export default ToDoApp;