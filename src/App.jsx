import './App.css'
import Counter from './counter'
import Dog, { Button } from './Dog'
import Header from './header'
import Condition from './multiCondition'
import User from './props'
import State from './state'
import Toggle from './toggle'
import Login, { Profile, Setting, Userkey, } from './UserComponent'

     let userObj = {
        name:"Asutosh Panda",
      age:21,
      address:"Bbsr"
      };
      let userObj2={
        name:"Anjali Dash",
      age:21,
      address:"BBSR"
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
 
<User user = {userObj}/>
<User user={userObj2} />
    </>
  )
}
export default App;
