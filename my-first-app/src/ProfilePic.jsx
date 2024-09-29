function ProfilePic(){

    const  profile = "./src/assets/profil.png"
    const handleclick =()=> console.log ("hey clicked ")

    return(
        <img onClick={handleclick} src={profile}></img>
    )
}
 export default ProfilePic