import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className='pl-15 pr-15 mt-10'>
        <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
          
            <div className='flex flex-col md:gap-3 sm:gap-2 text-xl text-gray-800'>
          <p>First Name :</p>   <input {...register('firstName',{required:true})} className='h-9 w-40 border' 
          type="text" />
           <div className='text-sm'>
           {errors.firstName && <p className='text-rose-300'>Email is required.</p>}
           </div>

            <p className='pl-5' >Last Name :</p>   <input {...register('lastName')} className='h-9 w-40 border mb-10' 
          type="text" />

          </div>


          <div className='flex flex-col gap-4  text-xl text-gray-800'>
          <p className=''>Email :</p>   <input {...register('Email',{required:true})} className='h-9 w-60 border' 
          type="text" />
          </div>
          <div className='text-sm'>
           {errors.Email && <p className='text-rose-300'>Email is required.</p>}
           </div>
          
           <input type="submit" />
        </form>
    </div>
  )
}

export default SignUp