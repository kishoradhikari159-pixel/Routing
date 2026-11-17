import {useForm } from "react-hook-form";
const ServicesProducts = () => {
 const  {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  return (
    <div className="pl-15 pr-15 mb-10 mt-10">
<form action="" onSubmit={handleSubmit((data)=>console.log(data))}>

<div className="flex gap-5">
 <p>First Name:</p>
 <div>
  <input className="h-9 w-50 border" type="text" {...register('FirstName',{required:true})}/>
  {errors.FirstName && <p className="text-red-500 text-sm mt-3">First Name is required</p>}
  </div>
  <p>Last Name:</p>
  <input className="h-9 w-50 border" type="text" {...register('LastName')} />
  </div>
<input className="mt-10 ml-5" type="submit" />
</form>
    </div>
  )
}

export default ServicesProducts