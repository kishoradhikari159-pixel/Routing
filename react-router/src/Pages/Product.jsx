import { useEffect, useState } from "react"
import axios from "Axios"
import Productcards from "../Components/home/Productcards"
import { Loader } from "lucide-react";
const Product = () => {

  const[data,setData]=useState([])
  const [search,setSearch]=useState("")
  const [error,setError]=useState("")
  const [loader,setLoader]=useState(null)
  const fetchdata= async()=>{
    try {
           setLoader(true)
      const res= await axios.get("https://dummyjson.com/products")
      setData(res.data.products)
           setLoader(false)
    } 
    
    catch (error) {
      console.log(error);
      setError(error.message);    
    
    }

    finally{
           setLoader(false)
    }

  }

  useEffect(()=>{

      fetchdata()
  },[] )


  
  const filtereddata=data.filter((value)=>{
    return(
      value.description.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (

    <div className='pl-15 pr-15'>




<input className='h-10 w-50 border mt-10 mb-10' type="text" 
placeholder="Items..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>


{ error ? <div className="h-screen w-full">
  <img src="https://media.tenor.com/CN0GKFWvBTcAAAAM/error-windows.gif" alt="" />

</div> :

loader ? <div className='h-screen w-full flex justify-center items-center'>
  <Loader className='h-20 w-20 animate-spin'/>
   </div> 
:

filtereddata.length==0 ? <div className=" flex h-screen w-full items-center justify-center"> no match found</div> : 

 <div className='grid grid-cols-2 lg:grid-cols-7 md:grid-cols-5 
    sm:grid-cols-3 gap-4'>

{
filtereddata.map((value)=>{
  return(
<Productcards pro={value} key={value.id}/>
  )
})
}
    </div>
}


   
    </div>
  )
}

export default Product