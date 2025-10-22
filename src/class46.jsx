import { useState } from "react"

function Class46() {
    const [data, setData] = useState({
        name: 'Asutosh',
        address: {
            city: "BBSR",
            country: "INDIA"
        }
    });
    let handleData = (val) => {
       data.name=val;
       setData({...data})
    }
    let handleCity=(city)=>{
        data.address.city=city;
        setData({...data,address:{...data.address,city}})
    }

    return (
        <>
            <h1>Updating Objects in State #46</h1>
            <input type="text" placeholder="Update Name" onChange={(event) => handleData(event.target.value)} />
             <input type="text" placeholder="Update City" onChange={(event) => handleCity(event.target.value)} />
            <button >Update Name</button>
            <h2>Name:{data.name}</h2>
            <h2>City:{data.address.city}</h2>
            <h2>Country:{data.address.country}</h2>

        </>
    )
}
export default Class46;