

function Class45({setUser}) {
    
    return (
        <>
            <h1>Lifting StateUp #45</h1>
            <input type="text" placeholder="Enter Your Name" onChange={(event)=>setUser(event.target.value)}/>
            <hr />
        </>
    )
}
export default Class45;