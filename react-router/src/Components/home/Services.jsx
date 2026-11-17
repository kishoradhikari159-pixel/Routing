import { Link } from 'react-router'
const Services = () => {
  return (
    
<div className='h-80 w-full pl-15 pr-15'>
<div className='h-10 w-full flex justify-center text-gray-800  font-bold text-3xl mb-10'>
    <h1>Our Services</h1>
</div>

<div className='h-80 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>

<div>
  <div className='flex justify-center text-c '>
<button className='h-15 w-15 bg-[#02769c] rounded-full flex justify-center items-center'>
  <img className='h-7 w-7 brightness-0 invert' src="https://cdn-icons-png.flaticon.com/128/483/483141.png" alt="computer" />
</button>
</div>

<h1 className='text-2xl text-gray-800 font-[650]  flex justify-center pt-4'> Software</h1>
<h1 className='text-2xl text-gray-800 font-[650]  flex justify-center'> Development</h1>

<p className='text-sm text-gray-800  flex justify-center pt-4 h-30 w-60
text-center'> Our Software Development areas are
    Mobile Friendly Websites Application .
Development, ERP ...</p>

<Link to='/SoftwareDev' className='text-sm text-[#057bc9] font-medium flex justify-center'> <span className='hover:text-[#025f9e] '>More...</span> </Link>

</div>

<div>
    <div className='flex justify-center'>
<button className='h-15 w-15 bg-[#02769c] rounded-full flex justify-center items-center'>
  <img className='h-7 w-7 brightness-0 invert ' src="https://cdn-icons-png.flaticon.com/128/2958/2958792.png" alt="flag" />
</button>
</div>

<h1 className='text-2xl text-gray-800 font-[650]  flex justify-center pt-4'> SEO Services</h1>

<p className='text-sm text-gray-800  flex justify-center pt-4'>We offer the most effective search   </p>
<p className='text-sm text-gray-800  flex justify-center'> engine optimization services ...</p>

<Link to='/SEO  ' className='text-sm text-[#057bc9] font-medium flex justify-center'> <span className='hover:text-[#025f9e] '>More...</span> </Link>

</div>

<div>
    <div className='flex justify-center'>
<button className='h-15 w-15 bg-[#02769c] rounded-full flex justify-center items-center'>
  <img className='h-7 w-7 brightness-0 invert ' src="https://cdn-icons-png.flaticon.com/128/9421/9421582.png" alt="cloud" />
</button>
</div>

<h1 className='text-2xl text-gray-800 font-[650]  flex justify-center pt-4'> Website design &</h1>
<h1 className='text-2xl text-gray-800 font-[650]  flex justify-center '> Hosting</h1>


<p className='text-sm text-gray-800  flex justify-center pt-4'> Creative website design, Easy and </p>
<p className='text-sm text-gray-800  flex justify-center'>  Affordable Powerful web hosting,</p>
<p className='text-sm text-gray-800  flex justify-center'>  99.9% Uptime Guarantee ...</p>

<Link to='/WebDesign' className='text-sm text-[#057bc9] font-medium flex justify-center'> <span className='hover:text-[#025f9e] '>More...</span> </Link>

</div>

<div>
    <div className='flex justify-center'>
<button className='h-15 w-15 bg-[#02769c] rounded-full flex justify-center items-center'>
  <img className='h-7 w-7 brightness-0 invert ' src="https://cdn-icons-png.flaticon.com/128/33/33308.png" alt="group" />
</button>
</div>

<h1 className='text-2xl text-gray-800 font-[650]  flex justify-center pt-4'> Consulting</h1>

<p className='text-sm text-gray-800  flex justify-center pt-4'>Consulting services to business house. </p>
<p className='text-sm text-gray-800  flex justify-center'> Our experts in Software and IT </p>
<p className='text-sm text-gray-800  flex justify-center'>industry helps ...</p>

<Link to='/Consulting' className='text-sm text-[#057bc9] font-medium flex justify-center'> <span className='hover:text-[#025f9e] '>More...</span> </Link>

</div>
</div>
</div>
  )
}

export default Services