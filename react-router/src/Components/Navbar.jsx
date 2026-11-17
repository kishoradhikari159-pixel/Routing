import { Link } from 'react-router'

const Navbar = () => {
  return (
  

<div  className='h-20 w-full grid grid-cols-2 items-center sticky top-0 bg-[#02769c] z-10'>

        <Link to="http://localhost:5173/" className='h-15 w-100 flex justify-center items-center'>
<img  className='h-15 w-50' src="https://infoxit.com/images/infoxlogo-white.png" alt="logo" />
        </Link>

        <div className=' h-15 w-full flex justify-around text-white text-md items-center'>
            <a className='hover:underline' href="#about">ABOUT</a>
            <Link className='hover:underline'  to="/ServicesProducts">SERVICES/PRODUCTS</Link>
            <Link className='hover:underline'  to="/Portfolio">PORTFOLIO</Link>
            <Link className='hover:underline'  to="/Expertise">EXPERTISE</Link>
             <Link className='hover:underline'  to="/Product">PRODUCT</Link>
             <Link className='hover:underline' to='/SignUp' > 
             <button className='h-8 w-20 border bg-orange-600'>SignUp</button>
             
              </Link>
        </div>
    </div>
   
  )
}

export default Navbar