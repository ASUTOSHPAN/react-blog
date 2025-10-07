import { useState } from "react";

function Condition() {
    let [count, setCount] = useState(0);
    let handleDisplay = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>Multiple Conditions</h1>
            <h1>{count}</h1>
            <button onClick={handleDisplay}>Increase Count</button>
            {
                count == 0 ? <h1>Condition 0</h1>
                    : count == 1 ? <h1>Condition 1</h1>
                        : count == 2 ? <h1>Condition 2</h1>
                            : <h1>Other Conditions</h1>
            }
        </>
    )
}
export default Condition;