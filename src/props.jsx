function  User({user} ){
   return(
    <>
    <h1>Props in React</h1>
    <hr />
    <h2>Name:{user.name}</h2>
    <h2>Age:{user.age} </h2>
    <h2>Address:{user.address} </h2>
    </>
   )
}
export default User;