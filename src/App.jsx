import {Routes,Route }from "react-router-dom"
import Welcome from "./pages/Welcome"
import Cart from "./pages/Cart"
import Info from "./pages/Info"
import Navi from "./Navi"
import Dashboard from "./pages/Dashboard"
export default function App(){
    return (<>
        <Navi />
        

        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/info' element={<Info />}/>
            <Route path='/dashBoard' element={<Dashboard />}/>
        </Routes>
    
    </>)
}