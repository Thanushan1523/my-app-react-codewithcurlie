
import PropTypes from 'prop-types';

// function UserGreat(props){
//     // if(props.isLogIn){
//     //     return <h2>welcome{props.username} to thanushan page </h2>
//     // }
//     // else {
//     //     return<h2>please login</h2>
//     // }

// // return ( props.isLogIn ? <h2 className="success-message" > Welcome {props.username} code with</h2>  : <h2 className="login-prompt"> please login to continue</h2>)
// const successMessage = <h2 className="success-message" > Welcome {props.username} code with</h2>
// const loginPrompt= <h2 className="login-prompt"> please login to continue</h2>
// return ( props.isLogIn ? successMessage   :loginPrompt )
function UserGreat(props) {
    const successMessage = <h2 className="success-message">Welcome {props.username}, code with us!</h2>;
    const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>;

    return props.isLogIn ? successMessage : loginPrompt;
}


UserGreat.propTypes = {
    isLogIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreat.defaultProps = {
    isLogIn: true,
    username: 'guest',
};



export default UserGreat;