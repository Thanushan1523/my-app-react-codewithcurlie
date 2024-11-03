import React,{useState} from "react";

function MyComponentt(){
    const[cycle ,setCycle]=useState(
        {type:"moutauin",
            material:"carbon steel",
            year:2024,
            color:"black"
        }
        
    )
    return(
            <div>
                <p>my favaroite cycl is :{cycle.type}</p>
            </div>
    )
    

}
export default MyComponentt;