
import React ,{useState} from "react";



function HandlerDemo(){
    const [name,setName] =useState(" ");

    function handleInput(event){
        setName(event.target.value)
    }
    return (
        <div>
            <input value={name} onChange={handleInput}/>
            <p>Name:{name}</p>
        </div>
    )

}


export default HandlerDemo ;