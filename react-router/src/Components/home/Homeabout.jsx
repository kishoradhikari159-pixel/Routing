
const Homeabout = () => {
  return (
    <div className='pt-22' id="about">
    <div className='grid grid-cols-2 w-screen h-115 pl-15 pr-15'>
      <div>
        <img className='h-50 w-140  mb-40' src="https://infoxit.com/images/ourTeam.jpg" alt="" />
      </div>

      <div>
<h1 className=' text-4xl text-gray-800 font-bold'>About Infox IT?</h1>

<p className=' pt-5 w-138 text-sm/6 text-gray-800'>Infox IT combines cross-industry expertise and experience with market-defining customers to make connections between makers and markets worldwide. We've gained unique insight from working on innovative products and disruptive technologies that we share with business leaders, showing them how strategic research and development can become a tool for managing their future. We use the power of connection to help them make amazing products, discover new revenue opportunities, and accelerate time-to-market.</p>


       <button className='  mt-10 h-12 w-50 bg-orange-400 text-white text-sm font-[550] rounded-md'>MORE ABOUT OUR TEAM</button>
     

      </div>
      
    </div>
    </div>
  )
}

export default Homeabout