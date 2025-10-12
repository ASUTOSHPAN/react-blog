import { useEffect, useState } from "react";

export function Class28() {
  const [count, setCount] = useState(0);
  let [data, setData] = useState(0);

  useEffect(() => {
    CallOnce();
  }, []);
  useEffect(() => {
    Call();
  }, [data])

  function CallOnce() {
    return (
      console.log("CallOnce function has called!")
    )
  };

  function Call() {
    return (
      console.log("Asutosh")
    )
  }


  return (
    <div>
      <h1>use of UseEffect hook in React JS #28</h1>
      <button onClick={() => setCount(count + 1)}>Counter{count}</button>
      <button onClick={() => setData(data + 1)}>Data{data}</button>
    </div>
  )
}
export default Class28;
