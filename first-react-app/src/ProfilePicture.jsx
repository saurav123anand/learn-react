function ProfilePicture(){
   const imageUrl='./src/assets/cat.jpeg';
   const handleClick=(e)=>e.target.style.display="none";
   return(
       <img onClick={(e)=>handleClick(e)} src={imageUrl} alt="loading image..." />
   )
}
export default ProfilePicture;