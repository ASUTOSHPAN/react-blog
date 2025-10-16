function Class39(){
    const handleForm=(event)=>{
        event.preventDefault(); 
        const name=document.querySelector("#name").value;
        console.log(name);
        const pass = document.querySelector("#pass").value;
        console.log(pass);
    }
   

    return(
        <div>
            <h1>uncontrolled Component #39</h1>
            <form action="" onSubmit={handleForm}>
                <input type="text" id="name" placeholder="Enter user name:" />
                <br /><br />
                <input type="password" id="pass" placeholder="Enter Password:" />
                <br /><br />
                <button>SUBMIT</button>
            </form>
        </div>
    )
}
export default Class39;