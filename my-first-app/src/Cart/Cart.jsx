import React , { useState } from "react";

function Cart(){
    const [cart ,setCart]=useState([]);
    const items =[
       {id:1, name:'chicken briyani' , price:150 ,
        description : 'aroma mixed chettinad briyani taste is good '
       } ,
       {id:2, name:'kottu' , price:200 ,
        description : 'good '
       } ,
       {id:3, name:'kadalai' , price:250 ,
        description : 'tatsty '
       } 
    ]
    const addToCart =()=>{

    }

    const removeFromCart =()=>{

    }

    const updateQuantity =()=>{

    }
    return(<div>
        <h1>Items</h1>
        <div>
            {items.map((item)=>(<><h3>{item.name}</h3><p>{item.description}</p>
            <p> price: {item.price}</p>
            <button onClick={()=> addToCart(item)}> Addtocart </button></>
            ))}
        </div>
        </div>)

}

export default Cart;