import { useState } from "react"

function Class47() {
    const [data, setData] = useState([
        'Asu', 'Anju', 'Yaser'
    ]);
    const [details, setDetails] = useState([
        {
            name: "Asu",
            age: "23"
        },
        {
            name: "Anju",
            age: 22
        }, {
            name: "Peter",
            age: 25
        }
    ])
    const handleUser = (name) => {
        data[data.length - 1] = name;
        setData([...data])
    }
    const handleAge = (age) => {
        details[details.length - 1].age = age;
        setDetails([...details])
    }
    return (
        <>
            <h1>Updating Array in State #47</h1>
            <input type="text" placeholder="Enter Update Name:" onChange={(e) => handleUser(e.target.value)} />
            {
                data.map((item, index) => (
                    <h3 key={index}>{item}</h3>
                ))
            }
            <hr />
            <input type="text" placeholder="Enter Last Update Age:" onChange={(e) => handleAge(e.target.value)} />
            {
                details.map((item, index) => (
                    <h3 key={index}>Name:{item.name},<br />Age: {item.age}</h3>
                ))
            }
        </>
    )
}
export default Class47;