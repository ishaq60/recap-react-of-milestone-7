export default function SingleFriends({Friend}){
    console.log(Friend);
const {name,email,username,phone}=Friend
return(
    <div className="box">
        <h4>Name:{name}</h4>
        <p>Email:{email}</p>
        <p>Username:{username}</p>
        <p>Username:{phone}</p>
      
    </div>
)
}