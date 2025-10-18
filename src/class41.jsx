import { useFormStatus } from "react-dom";

function Class41(){
    const handleSubmit=async()=>{
        await new Promise(res=>setTimeout(res,2000));
        console.log("Submit");
    }
   function Customer(){
    const {pending}=useFormStatus()
 return(
            <div style={{display:'flex',flexDirection:"column"}}>
                <input type="text" name="name" id="name" placeholder="Enter your Name:" style={{marginBottom:"5px",width:"200px"}}/>
                <input type="password" name="pass" id="pass" placeholder="Enter Password:" style={{marginBottom:"5px",width:"200px"}}/>
                <button style={{width:"80px"}} disabled={pending}>{pending?"Submiting...":"Submit"}</button>
            </div>
        )
   } 
    
    return(
        <div>
            <h1>useFormStatus Hook in React JS #41</h1>
            <form action={handleSubmit} >
              <Customer/>  
            </form>
        </div>
    )
}
export default Class41;