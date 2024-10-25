
import React ,{useState} from "react";



function HandlerDemo(){
    const [name,setName] =useState(" ");
    const [Qty ,setQty] =useState(1);
    const [comment ,setComment] =useState("")

    function handleInput(event){
        setName(event.target.value)
    }

    function handleNumber(event){
        setQty(event.target.value)
    }
    function handleComment(event){
        setComment(event.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleInput}/>
            <p>Name:{name}</p>

            <input value={Qty} onChange={handleNumber} type="number"/>
            <p>Quantity:{Qty}</p>
            <textarea value={comment} onChange={handleComment} placeholder="enter instruction"/>
            <p >comment:{comment}</p>
        </div>

    )

}


export default HandlerDemo ;