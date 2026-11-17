import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "Axios"
import { Loader } from 'lucide-react';

const ProductDetail = () => {
 const {id}= useParams()
    const[data,setData]=useState(null)
    const[loader,setLoader]=useState(null)

    const fetchdata = async()=>{
        try {
            setLoader(true)
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            setData(res.data)
            setLoader(false)
            
        } catch (error) {
            console.log(error);
            
            
        }finally{
            setLoader(false)


        }
    }

    useEffect(()=>{
        fetchdata()
    },[id])
    

   
  return (
    <div>



{loader ? <div className='h-screen w-full flex justify-center items-center'>
  <Loader className='h-20 w-20 animate-spin'/>
   </div> : 
   
   <div className='w-220 flex gap-10 mt-10 mb-10'>
   
   <div >
   {

    data?.images.map((value)=>{
        return(
            <div className="h-50 w-60" key={value}> 
                <img src={value}/>
            </div>

        )})

}
</div> 


   <div className='h-30 pl-5 pr-5 flex flex-col gap-10'>
<p>{data?.description}</p>
<p className='text-xl font-medium text-orange-500'> Rs {data?.price}</p>
<p className='text-sm text-gray-700'>{data?.discountPercentage}</p>
</div>
</div>  }


    </div>
  )
}

export default ProductDetail