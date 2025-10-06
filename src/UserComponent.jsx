
function Login() {
    return (
        <>
            <h1>Login</h1>
        </>
    )
}

export function Profile() {
    return (
        <>
            <h1>Profile</h1>
        </>
    )
}
export function Setting() {
    let x = 20;
    let y = 10;
    return (
        <>
            <h1>Setting</h1>
            <h2>{x * y}</h2>
            <button onClick={() => alert("Seting button has Clicked!")}>Click Me!</button>
        </>
    )
}

export const Userkey = "@123#123"
export default Login;