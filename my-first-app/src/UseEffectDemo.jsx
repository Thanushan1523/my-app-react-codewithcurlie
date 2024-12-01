import React,{useState, useEffect} from "react";
function UseEffectDemo(){
    const [count ,setCount] =useState(0);
    const [color , setColor]= useState("blue");
    function addCount(){
          setCount(C => C+1)
    }
    function subCount(){
        setCount(C => C-1)
  }

    function changeColor(){
        setColor(c => c ==="blue" ? "red" :"black")
    }

//  useEffect(() => {document.title=`count : ${count}`},[])
//  useEffect(() => {document.title=`HI`} ,[])  

useEffect(() => {document.title=`count : ${count} ${color}`},[count])

    return(<>
    <p style={{color:color }}>count : {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subCount}>Sub</button>
    <button onClick={changeColor}>change color</button>
    </>)
 }
 
 export default UseEffectDemo;