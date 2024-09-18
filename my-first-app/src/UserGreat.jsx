

function UserGreat(props){
    if(props.isLogIn){
        return <h2>welcome{props.username} to thanushan page </h2>
    }
    else {
        return<h2>please login</h2>
    }
}
export default UserGreat