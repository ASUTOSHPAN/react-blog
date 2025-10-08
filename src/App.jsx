import './App.css'
import Checkbox from './checkbox'
import Controlled from './Controlled'
import Counter from './counter'
import Dog, { Button } from './Dog'
import Header from './header'
import Input from './input'
import Loop, { Reuse } from './loop'
import Condition from './multiCondition'
import User, { User2 } from './props'
import Radio, { Dropdown } from './radioBtn'
import State from './state'
import Toggle from './toggle'
import Login, { Profile, Setting, Userkey, } from './UserComponent'
import Wrapper from './Wrapper'

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
  return (
    <>
      <h1>Hello, JavaScript</h1>
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
      <hr />
      {/* <User name="Asutosh" age={21} address="Bhubaneswar" /> */}

      <User user={userObj} />
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
      <Reuse/>
    </>
  )
}
export default App;
