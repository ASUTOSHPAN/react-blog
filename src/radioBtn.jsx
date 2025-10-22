import { useState } from "react";

function Radio() {
    const [gender, setGender] = useState("")
    return (
        <div>
            <h1>Handle Radio & Dropdown #23</h1>
            <h3>Select your gender:</h3>
            <input type="radio" id="male" name="gender" value="Male" onChange={(event) => setGender(event.target.value)} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" onChange={(event) => setGender(event.target.value)} />
            <label htmlFor="female">Female</label>
            <h4>Selected gender:{gender}</h4>
        </div>
    )
}
export function Dropdown() {
    const [city, setCity] = useState("BBSR");
    // const handleCity=()=>{
    //     setCity()
    // }
    return (
        <div>
            <h1>Handle Dropdown #23</h1>
            <h3>Select your City:</h3>
            <select style={{ border: "none", padding: '10px', borderRadius: '10px' }} onChange={(event) => setCity(event.target.value)}>
                <option value="Bhubaneswar" >Bhubaneswar</option>
                <option value="Cuttack">Cuttack</option>
                <option value="Puri">Puri</option>
                <option value="Nayagarh">Nayagarh</option>
                <option value="Jajpur">Jajpur</option>
            </select>
            <h2> selected City:{city} </h2>
        </div>
    )
}
export default Radio;