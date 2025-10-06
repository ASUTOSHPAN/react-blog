import { useState } from "react";
function State() {
    let [fruit, setFruit] = useState("Apple");
    let handleFruit = () => {
        setFruit("Banana");
    }
    return (
        <>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit Name</button>
        </>

    )
}
export default State;