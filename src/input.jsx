import { useState } from "react";

function Input() {
    let [value, setValue] = useState("Asutosh");
    return (
        <div>
            <h1>Input Field Value #20</h1>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Enter Your name:" />
            <h1>{value}</h1>
            <button onClick={() => setValue("")}>Clear</button>
        </div>
    )
}
export default Input;