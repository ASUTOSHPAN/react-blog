import { useRef } from "react"
import User40 from "./user40";

function Class40Two(){
    const inputRef=useRef(null)
    const updateInput=()=>{
        inputRef.current.value=1000;
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.style.backgroundColor="yellow"
    }
    return(
        <div>
            <h1>Forward Ref #40(2)</h1>
          <User40 ref={inputRef}/>
            <button onClick={updateInput}>Update Input</button>
        </div>
    )
}
export default Class40Two