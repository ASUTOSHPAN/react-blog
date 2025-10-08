import { useState } from "react";

function Toggle() {
    let [dispaly, setDisplay] = useState(true);
    let handleName = () => {
        setDisplay(!dispaly);
    }
    return (
        <>
            <h1>Toggle/Hide Show</h1>
            <button onClick={handleName}>Toggle Me!</button>
            {
                dispaly ? <h1>Asutosh</h1> : null
            }
        </>
    )
}
export default Toggle;