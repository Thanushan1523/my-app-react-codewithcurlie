import profilePic from './assets/test.png'

function Card(){
    return(
        <div className="card"> 
            
            <img className="card-img" src={profilePic} alt="PROFILE PICTURE"></img>
            <h2 className="card-tittle">ddgdg</h2>
            <p> i make my webside </p>
        </div>
    );

};
export default Card