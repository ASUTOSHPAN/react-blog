import { useState } from "react";

function Checkbox() {
    let [skills,setSkills]=useState([])
    let handleSkills = (event)=>{
        setSkills(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return (
        <div>
            <h1>Handle Checkbox in React #22</h1>
            <h3>Select your Skills</h3>
            <input type="checkbox" id="html" value="HTML"  onChange={handleSkills}/>
            <label htmlFor="html">HTML</label>
            <br />
            <input type="checkbox" id="css" value="CSS" onChange={handleSkills} />
            <label htmlFor="css">CSS</label>
            <br />
            <input type="checkbox" id="js" value="JavaScript" onChange={handleSkills} />
            <label htmlFor="js">JavaScript</label>
            <br />
            <input type="checkbox" id="react" value="REACT" onChange={handleSkills} />
            <label htmlFor="react">React</label>

            <h1>{skills.toString()} </h1>
        </div>
    )
}
export default Checkbox;