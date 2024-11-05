import React ,{ useState } from "react"


function MyComponenet4(){
    const [cars ,setCars]=useState([]);
    const [carYear ,setCarYear]=useState(new Date().getFullYear());
    const [carMake , setCarMake]=useState("");
    const [carModel , setCarModel]=useState("");

    function handleAddCars(){
        const newCar = {year:carYear , make:carMake , model:carModel};
        setCars(c =>[...c , newCar])
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCars (index){
        setCars(c => c.filter ((_,i)=> i !== index))

    }
   
    function handleCarYear(event){
        setCarYear(event.target.value);

    }

    function handleCarMake(event){
        setCarMake(event.target.value);
    }

    function handleCarModel(event){
        setCarModel(event.target.value);
    }

    return(
        <div>

            <h2> list of car objectes</h2>
            <ul>
                {cars.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCars(index)}>
                    {car.year}    {car.make }  {car.model}
                    
                    
                </li>)}

            </ul>
            <input type="number" value={carYear} onChange={handleCarYear} placeholder="enter year"/>
            <br/>
            <input type="text" value={carMake} onChange={handleCarMake} placeholder="enter car make"/>
            <br/>
            <input type="text" value={carModel} onChange={handleCarModel} placeholder="enter car model"/>
            <br/>

            <button onClick={handleAddCars}>add car </button>
        </div>
    )


    

}

export default MyComponenet4 ;