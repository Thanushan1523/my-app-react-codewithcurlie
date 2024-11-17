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
    return(<h1>hi</h1>)

}

export default Cart;