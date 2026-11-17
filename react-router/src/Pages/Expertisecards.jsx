import { Link } from "react-router"
const Expertisecards = ({cart}) => {
  return (
    <Link to={`/Expertise/${cart.id}`}> 
    <div className='h-80 w-40'>
      <div>
    <div className="mb-2">
      <img className="h-40 w-40" src={cart?.image} alt="" />
    </div>

    <div className='w-40 h-40 flex flex-col gap-1'>
      <p className='text-sm'>{cart?.name}</p>
      <p className='text-sm line-clamp-2' >{cart?.ingredients}</p>
      <p className='text-sm line-clamp-2'>{cart?.instructions}</p>
      <p className='text-md text-orange-600 flex gap-3'> Rating {cart?.rating}</p>
    </div>
      </div>
      
    </div>
    </Link>
  )
}

export default Expertisecards