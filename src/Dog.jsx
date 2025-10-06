
function Dog() {
    return (
        <>
            <h1>Asutosh</h1>
            <img src="apple.bg img.jpg" alt="Peacock" height={"400px"} id="photo" />
            <ul>
                <li>Invent new traffic light.</li>
                <li>Rehearse a movie scene.</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={() => alert("Button has Clicked now!")}>Click Me!</button>
        </>
    )
}                                           
 export function Button(){
    return(
        <button onClick={()=> alert("Banana")}>Banana</button>
    )
}
export default Dog;