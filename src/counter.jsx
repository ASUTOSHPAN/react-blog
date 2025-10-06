import { useState } from "react"

let Counter = () => {
    let [count, setCount] = useState(0);
    let [rCount, setRCount] = useState(0);
    let handleCount = () => {
        setCount(count + 1);
    }
    let handleRCount = () => {
        setRCount(rCount --);
    }
    return (
        <>
            <h1>Counter:{count}</h1>
            <button onClick={handleCount}>Increase Count Val</button>
            <h1>Reverse Counter:{rCount}</h1>
            <button onClick={handleRCount}>Decrease Count val</button>
        </>
    )
}
export default Counter;