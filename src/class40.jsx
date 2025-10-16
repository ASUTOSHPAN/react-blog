function Class40({display,name }){

    return(
        <div>
            <h1>Pass function in Component as Props #40</h1>
             <button onClick={()=>display(name)}>Display User</button>
        </div>
    )
}
export default Class40;