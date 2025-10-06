import './App.css'
import Counter from './counter'
import Dog, { Button } from './Dog'
import Header from './header'
import State from './state'
import Toggle from './toggle'
import Login,{Profile,Setting, Userkey,} from './UserComponent'

function App() {
  return (
    <>
    <h1>Hello, JavaScript</h1>
    <Header/>
    <Login/>
    <Profile/>
   <Setting/>
   <h1>{Userkey}</h1>
   <hr />
   <Dog/>
   <Button/>
   <hr />
   <State/>
   <Counter/>
   <hr />
   <Toggle/>
    </>
  )
}
export default App
