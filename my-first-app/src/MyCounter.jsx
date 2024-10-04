import { useState } from "react";
import React from "react";

function MyComponent (){
  const [count ,setCount]=useState(0);
  const increment =()=> {setCount(count + 2)}
  const decrement =()=> {setCount(count - 2)}
  const reset =()=> {setCount(0)}

  return(
    <div className="count-container">
        <p className="display">
            {count}
        </p>
        <button className="button" onClick={decrement}> decrement</button>
        <button className="button" onClick={increment}>increment </button>
        <button className="button" onClick={reset}>reset </button>
    </div>
  )
  
  
}

export default MyComponent ;