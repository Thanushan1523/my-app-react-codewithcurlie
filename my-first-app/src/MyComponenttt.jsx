import { useState } from "react";
import React from "react";
function MyComponenttt (){
    const [foods ,setFoods]=useState(["idly", "dosa" ,"poha"]);

    function handleUpdateFood(){

    }

    function handleRemoveFood(){

    }


    return(
        <div>
           <h2> my favorite fooods </h2>
           <ul>{foods.map((food ,index)=> <li key={index}>{food}</li>)}</ul> 
        </div>
    );
}

export default MyComponenttt ; 