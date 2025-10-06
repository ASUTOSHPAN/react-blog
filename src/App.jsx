import './App.css'
import Dog from './Dog'
import Header from './header'
import Login,{Profile,Setting, Userkey} from './UserComponent'

function App() {
  return (
    <>
    <h1>Hello, JavaScript</h1>
    <Header/>
    <Login/>
    <Profile/>
   <Setting/>
   <h1>{Userkey}</h1>
   <Dog/>
    </>
  )
}
export default App
