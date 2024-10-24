
import React ,{useState} from "react";



function HandlerDemo(){
    const [name,setName] =useState(" ");
    const [Qty ,setQty] =useState(1);

    function handleInput(event){
        setName(event.target.value)
    }

    function handleNumber(event){
        setQty(event.target.value)
    }


    return (
        <div>
            <input value={name} onChange={handleInput}/>
            <p>Name:{name}</p>

            <input value={Qty} onChange={handleNumber} type="number"/>
            <p>Quantity:{Qty}</p>
        </div>

    )

}


export default HandlerDemo ;