 import { useState } from "react";
import React  from "react";
 function ToDoApp (){
    return(
        <div>
            <hi> ToDo App</hi>
            <input type="text" placeholder="enter the task"/>
            <br/>
            <button> Add ToDo</button>
            <ul>
                <li>list</li>
            </ul>

        </div>
    )
 }

 export default ToDoApp;