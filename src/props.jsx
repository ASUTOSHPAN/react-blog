function User({ user }) {
    return (
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

export function User2({ name = "New User" }) {
    return (
        <div>
            <h1>React JS-Pass JSX with props #19 </h1>
            <h2>Hii, {name}</h2>
        </div>
    )
}