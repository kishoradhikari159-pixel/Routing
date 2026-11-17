import { BrowserRouter, Route, Routes } from "react-router"
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Expertise from './Pages/Expertise'
import Home from "./Pages/Home"
import Items from "./Fixed/Items"
import SoftwareDev from "./Services/SoftwareDev"
import SEO from "./Services/SEO"
import WebDesign from "./Services/WebDesign"
import Consulting from "./Services/Consulting"
import ServicesProducts from "./Pages/ServicesProducts"
import Product from "./Pages/Product"
import ProductDetail from "./Pages/ProductDetail"
import SignUp from "./Pages/SignUp"
import Expertisedetails from './Pages/Expertisedetails'
const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Items/>}/>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ServicesProducts" element={<ServicesProducts />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Expertise" element={<Expertise />} />
        <Route path="Expertise/:id" element={<Expertisedetails />} />
        <Route path="Product" element={<Product />} />
        <Route path="Product/:id" element={<ProductDetail />} />
        <Route path="SoftwareDev" element={<SoftwareDev />} />
        <Route path="SEO" element={<SEO />} />
        <Route path="WebDesign" element={<WebDesign />} />
        <Route path="Consulting" element={<Consulting/>} />
        <Route path="SignUp" element={<SignUp/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App