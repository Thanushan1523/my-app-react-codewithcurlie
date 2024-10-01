
import React ,{useState} from 'react';


function HookDemo(){
 const [name ,setName]=useState("guest");
 const [age ,setAge]=useState(0);
 const [isBoolValue ,setIsBoolValue]=useState(false);
 const updateName =() =>{
    setName("thanushan");
 }

 const incrementAge = () =>{setAge (age + 1)}
 const updateBoolValue = ()=> {setIsBoolValue (!isBoolValue)}

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

        <p>
            here BOOL:{isBoolValue ? "yes" : "no" }
        </p>
        <button onClick={updateBoolValue}>
            BOLLL
        </button>
    </div>
    
 )
}

export default HookDemo