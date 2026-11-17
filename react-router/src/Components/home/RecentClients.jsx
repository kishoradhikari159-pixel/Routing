import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib?.default
const RecentClients = () => {
  return (
    <div className='mt-25 pl-15 pr-15'>

<div>
    <h1 className='flex justify-center text-gray-800 text-3xl font-[650] mb-5'>Recent Clients</h1>
</div>
 
 
    <Marquee   className='h-40 w-full' pauseOnHover >
        
    <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/pizza.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>pizzahungrig.de</h1>
</div>

     <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/mnm.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>My Notes Medical</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/elmejor.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>El Mejor Perfume</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/banana.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Banana Pages</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-full' src="https://infoxit.com/images/digitalpolinator.jpg" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Digital Pollinators</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/md.jpg" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>MD Industries</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/bsb.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>BSB Deal</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/chautari.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Chautari Group</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/diamondbrows.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Diamond Brows</h1>
</div>

 <div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/skycollege.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650]h-20 w-full flex justify-center'>Sky College</h1>
</div>

<div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-full' src="https://infoxit.com/images/cpj.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Christopher Paul Jones</h1>
</div>

<div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-40' src="https://infoxit.com/images/o4me.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Only For Me
</h1>
</div>

<div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-10 w-full ' src="https://infoxit.com/images/uptechsolution.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Up Tech Solution</h1>
</div>

<div className='ml-5'>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-10 w-full' src="https://infoxit.com/images/collaboration.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Collaboration Limited</h1>
</div>

<div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/bucci.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>BuCCI</h1>
</div>

<div>
    <div className='h-20 w-50 flex justify-center'>
        <img className='h-20 w-20' src="https://infoxit.com/images/gloroius.png" alt="" />
        </div>
        <h1 className='text-xl text-gray-800 font-[650] h-20 w-full flex justify-center'>Glorious college
</h1>
</div>
    
    </Marquee>
 
 <div className='flex justify-center mt-25 mb-20 '>

<a  className='cursor-pointer' href="http://localhost:5173/">
<button className='h-11 w-34 bg-[#ff9100] rounded-sm items-center text-sm text-white'> READ MORE</button>
</a>

</div>


    </div>
  )
}

export default RecentClients