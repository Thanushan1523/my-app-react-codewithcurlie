import { useState } from "react";
import React from "react";
function MyComponenttt (){
    const [foods ,setFoods]=useState(["idly", "dosa" ,"poha"]);

    function handleUpdateFood(){
        const newFood= document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f=>[...f , newFood]);

    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i!== index));

    }


    return(
        <div>
           <h2> my favorite fooods </h2>
           <ul>{foods.map((food ,index)=> 
            <li key={index} onClick={()=>handleRemoveFood(index)}>
                {food}
            </li>
        )}
           </ul> 
           <input type="text" id="foodInput" placeholder="enter your favor food"/>
           <button onClick={handleUpdateFood}>add button</button>
        </div>
    );
}

export default MyComponenttt ; 