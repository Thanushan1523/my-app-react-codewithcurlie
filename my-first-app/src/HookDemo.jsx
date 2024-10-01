
import React ,{useState} from 'react';


function HookDemo(){
 const [name ,setName]=useState("guest");
 const [age ,setAge]=useState(0);
 const updateName =() =>{
    setName("thanushan");
 }

 const incrementAge = () =>{setAge (age + 1)}
 return(
    <div>
        <p>
            here name:{name}
        </p>
        <button onClick={updateName}>
            click here
        </button>
        <p>
            here age:{age}
        </p>
        <button onClick={incrementAge}>
            click here
        </button>
    </div>
    
 )
}

export default HookDemo