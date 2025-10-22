import Subject from "./subject";

function Student(){
    return(
        <div style={{backgroundColor:"red",color:"black",padding:"10px"}}>
        <h1>Student Component</h1>
        <Subject/>
        </div>
    )
}
export default Student;