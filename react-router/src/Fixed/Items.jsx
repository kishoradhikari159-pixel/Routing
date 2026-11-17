import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Items = () => {
  return (
    <div>
<Navbar/>
<Outlet/>
<Footer/>
    </div>
  )
}

export default Items