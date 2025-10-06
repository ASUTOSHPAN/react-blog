function Header() {
    return (
        <div>
            <h1>Hello, Asutosh! You are learning React JS.</h1>
            <Fruit />
            <Color />
        </div>
    )
}
function Fruit() {
    return (
        <>
            <h2>Fruits:</h2>
            <ol>
                <li>Apple</li>
                <li>Grapes</li>
                <li>Orange</li>
            </ol>
        </>
    )
}
function Color() {
    return (
        <>
            <h2>Colors:</h2>
            <ul>
                <li>Red</li>
                <li>Yellow</li>
                <li>White</li>
            </ul>
        </>
    )
}
export default Header;