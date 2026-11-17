import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from 'Axios'
import { Loader } from "lucide-react"
const Expertisedetails = () => {
    const [data,setData]=useState(null)
    const [loader,setLoader]=useState(null)
    const {id}=useParams()

    const fetchdata=async()=>{
        try {
            setLoader(true)
            const res=await axios.get (`https://dummyjson.com/recipes/${id}`) 
        setData(res.data)  
    setLoader(false)    } 
            catch (error) {
            
        }
        finally{
            setLoader(false)
        }
    } 

    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
{
    loader ? 
 <div className='h-screen w-full flex justify-center items-center'>
  <Loader className='h-20 w-20 animate-spin'/>
   </div> 
    : 
    <div  className='w-220 flex gap-10 mt-10 mb-10'>

  <div className="mt-10">
<img className="h-50 w-130" src={data?.image} />
    </div>

    <div  className='h-30 pl-5 pr-5 flex flex-col gap-10'> 
<p className='text-sm'>{data?.name}</p>
      <p className='text-sm ' >{data?.ingredients}</p>
      <p className='text-sm'>{data?.instructions}</p>
      <p className='text-md text-orange-600 flex gap-3'> Rating {data?.rating}</p>
    </div>
    </div>
}
    </div>
  )
}

export default Expertisedetails