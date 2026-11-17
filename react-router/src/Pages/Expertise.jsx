import { useEffect, useState } from "react"
import axios from 'Axios'
import Expertisecards from './Expertisecards'
import { Loader } from "lucide-react"
const Expertise = () => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')
    const [loader,setLoader]=useState(null)
    const [error,setError]=useState(null)
    const fetchdata= async()=>{
        try {
           setLoader(true)
      const res= await axios.get("https://dummyjson.com/recipes")
      setData(res.data.recipes)
           setLoader(false)
    } 
         catch (error) {
           console.log(error);
           setError(error.message);
        }
        finally
        {
setLoader(false)
        }
    }


    useEffect(()=>{
        fetchdata()
    },[])

    const filtereddata=data.filter((value)=>{
        return(
            value.name.toLowerCase().includes(search.toLowerCase())
        )
    })

  return (
    <div className="pl-15 pr-15 mt-10">

<input className="h-10 w-60 border"
 type="text"
placeholder="Foods...."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>



{
  loader ? <div className='h-screen w-full flex justify-center items-center'>
  <Loader className='h-20 w-20 animate-spin'/>
   </div> 
:

error ? <div className="h-screen w-full flex flex-col justify-center items-center" > 
    <img className="h-40 w-40" src="https://tse2.mm.bing.net/th/id/OIP.XHHT4kfEWT034XpB5rbzKQHaHk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
    <p className="text-2xl">ERROR</p>
    <p className="text-2xl">No Internet Connection</p>
    <a  className="hover:underline text-xl mt-5" href="http://localhost:5173/Expertise">Try Again</a>
</div> :

filtereddata.length==0 ? <div className="h-screen w-full flex flex-col justify-center items-center"> 
No match found
</div>  :

<div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-10 mt-10'>
{
    filtereddata.map((value)=>{
        return(
            <Expertisecards cart={value} key={value.id}/>
        )
    })
}
</div>
}


    </div>
  )
}

export default Expertise