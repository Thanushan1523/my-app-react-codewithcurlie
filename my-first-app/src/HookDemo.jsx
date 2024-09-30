
import React ,{useState} from 'react';
function HookDemo(){
 let [name ,setName]=useState();
 const updateName =() =>{
    setName("thanushan");
 }
 return(
    <div>
        <p>
            here name:{name}
        </p>
        <button onClick={updateName}>
            click here
        </button>
    </div>
 )
}

export default HookDemo