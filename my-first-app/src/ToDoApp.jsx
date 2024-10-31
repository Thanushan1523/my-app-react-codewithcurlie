import { useState } from "react";
import React  from "react";


 function ToDoApp (){
    const[input ,setInput] =useState("")
    const[todos,setTodo]=useState([]) 

    function handleInput(event){
        setInput(event.target.value)}
    function addTodo(){
        if(input != "")
        setTodo([...todos ,input])
        setInput("");}
        
    return(
        <div>
            <hi> ToDo App</hi>
            <input type="text" value={input} onChange={handleInput}  placeholder="enter the task"/>
            <br/>
            <br/>
            <br/>
            <button onClick={addTodo}> Add ToDo</button>
            <ul>
                {todos.map((todo ,index) =>(<li key={index}>{todo}</li>))}
                
            </ul>

        </div>
    )
 }

 export default ToDoApp;