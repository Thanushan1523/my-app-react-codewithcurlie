import React,{useState} from "react";

function MyComponentt(){
    const[cycle ,setCycle]=useState(
        {type:"moutauin",
            material:"carbon steel",
            year:2024,
            color:"black"
        }
        
    )
    function handleTypeChange(event){
        setCycle(prevCycle =>({...prevCycle,type:event.target.value}))
    }
    function handleMaterialChange(event){
        setCycle(prevCycle =>({...prevCycle,material:event.target.value}))
    }
    function handleColorChange(event){
        setCycle(prevCycle =>({...prevCycle,color:event.target.value}))
    }
    function handleYearChange(event){
        setCycle(prevCycle =>({...prevCycle,year:event.target.value}))
    }
    return(
            <div>
                <p>my favaroite cycl is :{cycle.type}{cycle.material}{cycle.color}{cycle.year}</p>
                <input type="text" onChange={handleTypeChange} value={cycle.type}/> <br/>
                <input type="text" onChange={handleMaterialChange} value={cycle.material}/> <br/>
                <input type="text" onChange={handleColorChange} value={cycle.color}/> <br/>
                <input type="number" onChange={handleYearChange} value={cycle.year}/>
                <br/>
            </div>
    )
    

}
export default MyComponentt;