import { useActionState } from "react";

function Class48(){
    const handleSubmit=async(previousData,formData)=>{
        let name=formData.get("name");
        let password=formData.get("pass");
        await new Promise(res=>setTimeout(res,2000));
        console.log(name,password); 
        if(name && password){
            return{message:"Data Submitted"}
        }else{
            return{error:"Filled Data properly:"}
        }
    }
    const[data,action,pending]=useActionState(handleSubmit,undefined);
   
    return(
        <>
        <h1>useActionState Hook #48</h1>
        <form action={action}>
            <input type="text" placeholder="Enter Name:" name="name" />
            <br /><br />
             <input type="password" placeholder="Enter Password:" name="pass" />
            <br /><br />
            {
                data?.error&&<span style={{color:"red"}}>{data?.error}</span>
            }
            {
                data?.message && <span style={{color:"green"}}>{data?.message}</span>
            }
            <br />
            <button disabled={pending}>{pending?"Submitting":"Submit"}</button>
        </form>
        </>
    )
}
export default Class48;