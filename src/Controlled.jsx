import { useState } from "react";

function Controlled() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div>
            <h1>Controlled Components #21</h1>
            <form action="">
                <label htmlFor="text">Enter Name:</label>
                <input type="text" placeholder="Enter ypur name:" value={name} onChange={(event) => setName(event.target.value)} style={{ border: "1px solid grey", borderRadius: "10px", padding: "10px" }} />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Enter your Password:" value={password} onChange={(event) => setPassword(event.target.value)} style={{ border: "1px solid grey", borderRadius: "10px", padding: "10px" }} />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter Your Email" value={email} onChange={(event) => setEmail(event.target.value)} style={{ border: "1px solid grey", borderRadius: "10px", padding: "10px" }} />
                <br /><br />
                <h2>{name}</h2>
                <h2>{password} </h2>
                <h2>{email}</h2>
                <button onClick={() => { setName(''); setEmail(''); setPassword('') }} style={{ color: 'white', backgroundColor: "grey", fontSize: "16px", padding: "10px", borderRadius: "10px" }}>Clear</button>
            </form>
        </div>
    )
}
export default Controlled;