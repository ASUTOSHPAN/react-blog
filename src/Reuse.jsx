function Reuse2({ data }) {
    return (
        <div style={{ color: "red", border: "2px solid grey", borderRadius: '10px', margin: "10px", paddingLeft: "10px", width: "400px" }}>

            <h1>Name: <span style={{ color: "yellow" }} >{data.name} </span></h1>
            <h1>Age:{data.age} </h1>
            <h1>Email:{data.email} </h1>
            <h1>Id:{data.id} </h1>
        </div>
    )
}
export default Reuse2;