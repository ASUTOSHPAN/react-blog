//1=>State that is calculated or derived from other state values or Props within your component.
//2=>Derived state can be a variable.

import { useState } from "react";

//3=>No need to extra state, only variables or constants are enough.
function Class44() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const handleAddUsers = () => {
        setUsers([...users, user])
    }
    let total = users.length;
    let last = users[users.length - 1];
let unique= [...new Set(users)].length
    return (
        <>
            <h1>Derived State in React JS #44</h1>
            <h2>Total User:{total} </h2>
            <h2>Last User:{last} </h2>
            <h2>Unique User:{unique} </h2>
            <input type="text" placeholder="Add new User" onChange={(event) => setUser(event.target.value)} />
            <button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item, index) => (
                    <h4 key={index}>{item}</h4>
                ))
            }
            <br /><br /><br />
        </>
    )
}
export default Class44;