import { useState } from 'react'
import './App.css'
import Checkbox from './checkbox'
import Class28 from './class28'
import Class29 from './class29'
import Class30 from './Class30'
import Controlled from './Controlled'
import Counter from './counter'
import Dog, { Button } from './Dog'
import Header from './header'
import Input from './input'
import Loop, { Reuse } from './loop'
import Condition from './multiCondition'
import Nested from './nestedLoop'
import User, { User2 } from './props'
import Radio, { Dropdown } from './radioBtn'
import State from './state'
import Toggle from './toggle'
import Login, { Profile, Setting, Userkey, } from './UserComponent'
import Wrapper from './Wrapper'
import Class32 from './Class32'
import Class33 from './class33'
import Class34 from './class34'
import UserProfile from './userProfile'
import Class38 from './class38'
import Class39 from './class39'
import Class40 from './class40'
import Class40Two from './class40(2)'
import Class41 from './class41'


let userObj = {
  name: "Asutosh Panda",
  age: 21,
  address: "Bbsr"
};
let userObj2 = {
  name: "Anjali Dash",
  age: 21,
  address: "BBSR"
};

function App() {
  let [toggle, setToggle] = useState(true);

  // Pass function in Component as Props #40
  const displayName=(name)=>{
    alert(name)
  }
  
  return (
    <>
      {/* <h1>Hello, JavaScript</h1>
      <Header />
      <Login />
      <Profile />
      <Setting />
      <h1>{Userkey}</h1>
      <hr />
      <Dog />
      <Button />
      <hr />
      <State />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <Condition />
      <hr /> */}
      {/* <User name="Asutosh" age={21} address="Bhubaneswar" /> */}

      {/* <User user={userObj} />
      <User user={userObj2} />
      <hr />
      <User2 name="Asutosh" />
      <User2 />
      <User2 />
      <Wrapper color="orange" >
        <h1>Hello EveryOne</h1>
      </Wrapper>
      <Wrapper color='yellow' >
        <h1>Hello Asutosh</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello Admin</h1>
        <h2 style={{ color: "red" }} >Please Login</h2>
      </Wrapper>
      <Wrapper>
        <h1>Hello Admin</h1>
        <h2 style={{ color: "red" }} >Please Login</h2>
      </Wrapper>
      <hr />
      <Input />
      <hr />
      <Controlled />
      <hr />
      <Checkbox />
      <hr />
      <Radio />
      <Dropdown />
      <hr />
      <Loop />
      <hr />
      <Reuse />
      <hr />
      <Nested />
      <hr />
      <Class28 />
      <hr />
      <Class29 />
      <hr />
      {
        toggle ? <Class30 /> : <h3> "The Class -30 is null"</h3>
      }
      <button onClick={() => setToggle(!toggle)}>Toggle BTN</button>
      <hr />
      <Class32 />
      <hr />
      <Class33 />
      <hr />
      <Class34 /> 
      <hr />
      <UserProfile />
      <hr />
      <Class38/>
      <hr />
      <Class39/>
      <hr />
     <h1>Call Parent Component Function from child Component.</h1>
     <Class40 display={displayName} name="Asu"/>
      <Class40 display={displayName}name = "Anju"/>
       <Class40 display={displayName}name ="Mami"/>
       <hr />
       <Class40Two/>
       <hr />*/}
       <Class41/>
    </>
  )
}
export default App;
