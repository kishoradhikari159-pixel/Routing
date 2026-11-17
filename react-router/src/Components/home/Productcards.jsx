import { Link } from "react-router"
const Productcards = ({pro}) => {
  return (
    <Link to={`/Product/${pro?.id}`}>
    <div className='h-70'>
   <img className='h-40 w-full' src={pro?.thumbnail} alt="" />
   <div className='h-30 pl-5 pr-5'>
<p className='line-clamp-3'>{pro?.description}</p>
<p className='text-xl font-medium text-orange-500'> Rs {pro?.price}</p>
<p className='text-sm text-gray-700'>{pro?.discountPercentage}</p>
</div>
    </div>
    </Link>
  )
}

export default Productcards