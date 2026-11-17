import {Link} from 'react-router'
const Footer = () => {
  return (
    <div className='h-90 w-full z-10'>
      <div  className='h-40 w-full bg-[#02769c] '>
<h1 className='text-white text-3xl font-bold pl-15 pt-5'>Need more information?</h1>
<span className='text-sm text-white pl-15'>Please drop an email with your queries or expectation from us.</span>

<button className='h-10 w-30 border text-white border-white rounded-sm font-semibold ml-30'> Contact</button>

      </div>


       <div  className='h-50 w-full bg-[#035874] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>

<div>
<a href="http://localhost:5173/" className='h-20 w-130 items-center mt-15 pl-15'>
<img  className='h-16 w-50' src="https://infoxit.com/images/infoxlogo-white.png" alt="logo" />
        </a>
        </div>

        <div>
          <p className='text-white text-2xl font-[650] text-md pt-5'>SITE MAP</p>
         <Link className='text-white text-sm  hover:underline' to='http://localhost:5173/about' > About </Link><br/>
         <Link className='text-white text-sm hover:underline' to='http://localhost:5173/ServicesProducts'>SERVICES/PRODUCTS</Link><br/>
         <Link className='text-white text-sm hover:underline' to='http://localhost:5173/Portfolio'>PORTFOLIO</Link><br/>
         <Link className='text-white text-sm hover:underline' to='http://localhost:5173/Expertise'>EXPERTISE</Link>
          
                  </div>
       
        <div>
          <p className='text-white text-2xl font-[650] text-md pt-5'>Our Services</p>
         <Link className='text-white text-sm  hover:underline' to='http://localhost:5173/SoftwareDev' > Software Development </Link><br/>
         <Link className='text-white text-sm hover:underline' to='http://localhost:5173/SEO'>ProjectMgmt & Training</Link><br/>
         <Link className='text-white text-sm hover:underline' to='http://localhost:5173/WebDesign'>Web Hosting</Link><br/>
         <Link className='text-white text-sm hover:underline' to='http://localhost:5173/Consulting'>Consulting</Link>
    
                  </div>


                  
          <div>
            <p className='text-white text-2xl font-[650] text-md pt-5'>Follow Us On</p>

            <div className='mt-3 flex gap-2'>
              <button className='h-13 w-13 rounded-full border-2 border-white text-white font-extrabold text-3xl'>
                in
              </button>

              <img  className='h-12 w-12 invert' src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="" />

              <div className='h-13 w-13 flex justify-center items-center rounded-full border-2 border-white'>
              <img  className='h-8 w-8 invert' src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer