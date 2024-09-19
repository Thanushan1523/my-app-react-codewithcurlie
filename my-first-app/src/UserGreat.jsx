

function UserGreat(props){
    // if(props.isLogIn){
    //     return <h2>welcome{props.username} to thanushan page </h2>
    // }
    // else {
    //     return<h2>please login</h2>
    // }

return ( props.isLogIn ? <h2> Welcome {props.username} code with</h2>  : <h2> please login to continue</h2>)
}
export default UserGreat