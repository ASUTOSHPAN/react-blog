import { useTransition } from "react";

function Class42(){
    const [pending,startTransition]=useTransition();
    const handleButton=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,5000));
        })
    }
    
    return(
        <div>
            <h1>useTransition Hook #42</h1>
            {
              pending?<img src="css-loader.gif" style={{height:"50px"}}/>: null
            } 
            <button disabled={pending} onClick={handleButton}>{pending?"Submitting...":"Submit"}</button>
        </div>
    )
}
export default Class42;