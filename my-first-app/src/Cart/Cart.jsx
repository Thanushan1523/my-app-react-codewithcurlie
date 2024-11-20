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
    const addToCart =(item)=>{
        const existingItem =cart.find((cartItem)=> cartItem.id === item.id)
        if (existingItem){
            const existingItemUpdate =cart.map((cartItem)=> 
            cartItem.id === item.id ? {...cartItem ,quantity : cartItem.quantity +1 } : cartItem)
            setCart(existingItemUpdate)
        }
        else{
            setCart([...cart,{...item,quantity:1}]);
        }
    };

    const removeFromCart =(id)=>{
        setCart(cart.filter((item)=>item.id !==id))
    }

    const updateQuantity =(id,amount)=>{
        const updatedCart =cart.map(item => {
            if(item.id === id){
                return{...item , quantity:item.quantity +amount}
            }
            return item;
        })
        const filteredCart = updatedCart.filter
        (item=>
            item.quantity >0 
        )
        setCart(filteredCart);
    }
    return(<div>
        <h1>Items</h1>
        <div>
            {items.map((item)=>(<><h3>{item.name}</h3><p>{item.description}</p>
            <p> price: {item.price}</p>
            <button onClick={()=> addToCart(item)}> Addtocart </button></>
            ))}

            <div>
                <h1>Cart</h1>
                {cart.length === 0 && <p> NO items in the cart </p>}
                {cart.length > 0 && (
                    <div>
                     <ul>
                        {cart.map((item) =>(  
                        <li key={item.id}>
                            <span>{item.name} - Quantity {item.quantity}</span>
                            <button onClick= {()=> updateQuantity(item.id ,1)}> +</button>
                            <button onClick= {()=> updateQuantity(item.id ,-1)}> - </button>
                            <button onClick={()=> removeFromCart(item.id)}> Remove </button>
                            </li>
                       ))}
                            </ul>   
                    
                 
                </div>
                )}
            </div>
        </div>
        </div>)

}

export default Cart;