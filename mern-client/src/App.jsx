import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar"
import MyFooter from './home/MyFooter'

function App() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Outlet/>
    </div>
    <MyFooter/>
    
    
    </>
  )
}

export default App
