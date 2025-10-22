import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject(){
    const subject = useContext(SubjectContext)
    return(
        <div style={{backgroundColor:"green",color:"black",padding:"10px"}}>
            <h1>Subject is: {subject}</h1>
        </div>
    )
}
export default Subject;