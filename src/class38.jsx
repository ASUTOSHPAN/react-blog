import { useRef } from "react";

function Class38() {
    const inputRef= useRef(null);
    const inputHandler =()=>{
        inputRef.current.focus()
    }
    const toggleHandler=()=>{
        if(inputRef.current.style.display!="none"){
            inputRef.current.style.display="none"
        }else{
            inputRef.current.style.display="inline"
        }
    }
    return (
        <div>
             <h1>useRef Hook #38</h1>

             <button onClick={toggleHandler}>Toggle</button>
             <input ref={inputRef} type="text" placeholder="Enter your name:" />
             <button style={{borderRadius:"8px"}} onClick={inputHandler}>Focus on Input Field</button>
        </div>
    )
}
export default Class38;