import { useEffect, useState } from "react";

function Class29() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        handleCount();
    }, [count])

    useEffect(() => {
        handleData();
    }, [data])
    function handleCount() {
        return (
            console.log("Handle Count Called!")
        )
    }

    function handleData() {
        return (
            console.log("Handle Data has Called")
        )
    }

    return (
        <div>
            <h1>Handle Props Side Effect with useEffect in Component #29</h1>
            <h1>Counter Value{count}</h1>
            <h1>Data Value {data}</h1>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <button onClick={() => setData(data + 1)}>Data</button>
        </div>
    )
}
export default Class29;