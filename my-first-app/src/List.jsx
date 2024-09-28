function List(props){
    const itemList = props.items;
    const category = props.category;

      const listItems =itemList.map(veg => <li key ={veg.id}>{veg.name} : &nbsp; <b> {veg.qty}</b></li>)

    
    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol></>
    )
}

export default List


    // const veggies =[{id:1,name:"onion",qty:9},{id:2,name:"tomato",qty:9},{id:3,name:"carrot" ,qty:10}];
    // veggies.sort((a,b) =>b.name.localeCompare(a.name)) //reverse sorting
    // veggies.sort((a,b) =>a.qty -b.qty) 
// const listItems= veggies.map( veg => <li> {veg} </li>)
    // const listItems= veggies.map( veg => <li key={veg.id}> {veg.name} : &nbsp; <b >{veg.qty}</b></li>)