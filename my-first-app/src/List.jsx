function List(){
    const veggies =[{name:"onion",qty:9},{name:"tomato",qty:9},{name:"carrot" ,qty:10}];
    veggies.sort()

    // const listItems= veggies.map( veg => <li> {veg} </li>)
    const listItems= veggies.map( veg => <li key={veg.name}> {veg.name} </li>)
    return(listItems)
}

export default List