import React,{useState, useEffect} from "react";
function UseEffectDemo(){
    const [count ,setCount] =useState(0);
    function addCount(){
          setCount(C => C+1)
    }

//  useEffect(() => {document.title=`count : ${count}`},[])
//  useEffect(() => {document.title=`HI`} ,[])  

useEffect(() => {document.title=`count : ${count}`},[count])

    return(<>
    <p>count : {count}</p>
    <button onClick={addCount}>Add</button>
    </>)
 }
 
 export default UseEffectDemo;