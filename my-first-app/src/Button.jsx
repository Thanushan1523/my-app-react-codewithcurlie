function Button(){

    // const handleclick =() => console.log("im clicked ");
    // const handleclick2 =(name) => console.log( `${name}clicked me `);

    // let count=0
    // const handleclick =(name)=> {
    //     if (count < 3){
    //         count++ ;
    //         console.log(`${name} , clicked me ${count} times`)
    //     }
    //     else{
    //         console.log(`${name} , please stop `)
    //     }
    // }
    // return(
    //     <button onClick ={() =>handleclick ("thanu") }> hey thanushan</button>);

        const handleclick =(e)=>e.target.textContent ="nooo"
            return(<button onClick={(e) => handleclick(e)}> hi thanu</button>)

}
 export default Button 