function Button(){

    const handleclick =() => console.log("im clicked ");
    const handleclick2 =(name) => console.log( `${name}clicked me `);
    return(
        <button onClick ={() =>handleclick2 ("thanu") }> hey thanushan</button>);


}
 export default Button 