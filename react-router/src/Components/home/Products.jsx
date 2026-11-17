
const Products = () => {
  return (
    <div className='pl-15 mr-15 mt-180 lg:mt-20 md:mt-80 sm:mt-180'>

        <div className='mb-5'>
            <h1 className='flex justify-center text-3xl font-semibold '>Products</h1>
        </div>

        <div className='grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>

<div>
    <img className='h-50 w-auto' src="https://infoxit.com/images/accounting.jpg" alt="" />
    <h1 className='flex justify-center text-xl font-semibold mt-2 '>Infox Accounting Software</h1>
</div>
<div>
    <img className='h-50 w-auto' src="https://infoxit.com/images/schoolaccounting.jpg" alt="" />
    <h1 className='flex justify-center text-xl font-semibold mt-2 '>Infox Schooling Software
</h1>
</div>
<div>
    <img className='h-50 w-auto' src="https://infoxit.com/images/stockmanagement.jpg" alt="" />
    <h1 className='flex justify-center text-xl font-semibold mt-2 '>Stock Management Software</h1>
</div>
<div>
    <img className='h-50 w-auto' src="https://infoxit.com/images/sisapp.jpg" alt="" />
    <h1 className='flex justify-center text-xl font-semibold mt-2 '>SISApp</h1>
</div>
        </div>

<div className='flex justify-center mt-6 mb-6'>

<a  className='cursor-pointer' href="http://localhost:5173/">
<button className='h-11 w-34 bg-[#ff9100] rounded-sm items-center text-sm text-white'> READ MORE</button>
</a>

</div>

    </div>
  )
}

export default Products