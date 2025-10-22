import Student from "./student";

function ClassComponent(){
    return(
        <div style={{backgroundColor:"skyblue",color:"black",padding:"10px"}}>
        <h1>Class Component</h1>
        <Student/>
        </div>
    )
}
export default ClassComponent;