
import React ,{useState} from "react";



function HandlerDemo(){
    const [name,setName] =useState(" ");
    const [Qty ,setQty] =useState(1);
    const [comment ,setComment] =useState("");
    const [payment ,setPayment] =useState("")

    function handleInput(event){
        setName(event.target.value)
    }

    function handleNumber(event){
        setQty(event.target.value)
    }
    function handleComment(event){
        setComment(event.target.value)
    }
    
    function handlePayment(event){
        setPayment(event.target.value)
    }



    return (
        <div>
            <input value={name} onChange={handleInput}/>
            <p>Name:{name}</p>

            <input value={Qty} onChange={handleNumber} type="number"/>
            <p>Quantity:{Qty}</p>
            <textarea value={comment} onChange={handleComment} placeholder="enter instruction"/>
            <p >comment:{comment}</p>
            <select value={payment} onChange={handlePayment}>
                <option value={""}>select any options</option> 
                <option value={"visa"}>visa</option>
                <option value={"master"}>master</option>
                <option value={"giftcard"}>giftcard</option>
            </select>
            <p>mode of payment: {payment}</p>

                
        </div>

    )

}


export default HandlerDemo ;