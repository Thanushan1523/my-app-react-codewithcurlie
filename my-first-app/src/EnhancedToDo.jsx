
import React, {useState}from "react";


function EnhancedToDo(){
    const [todos,setToDos] =useState([]);
    const [inputText ,setInputText]=useState('');
    const[editId ,setEditId]=useState(null);
    const[editText ,setEditText]=useState('');

    return(
    <div>
        <h1>ToDo List</h1>
        <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)} placeholder="Add your todo" />
        <ul>
            {todos.map((todo)=> (<li key={todo.id}>{editId === todo.id ?(<input type="text"/>)}</li>}
        </ul>
        
        
        </div>)
}

export default EnhancedToDo;