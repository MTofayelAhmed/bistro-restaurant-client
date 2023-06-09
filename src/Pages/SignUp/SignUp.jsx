import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {createUser,  updateUserProfile}= useContext(AuthContext)
  const onSubmit = data=>{

    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user)
updateUserProfile( data.name, data.photoURL)
.then(()=>{
  const user = {name: data.name, email: data.email}
  fetch('http://localhost:5000/users', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })

  .then(res => res.json())
  .then(data=> {
    if(data.insertedId){
      reset()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user updated Successfully',
        showConfirmButton: false,
        timer: 1500
      })
  
      navigate('/')
    }
  })
 

})
.catch((error)=>{
  console.log(error)

})  })

    .catch(error=>{
      console.log(error)
    })
    console.log(data)

  } 
  return (
   <>
   <Helmet>
   <title>Bistro Boss |SignUp</title>
   </Helmet>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">SignUp  now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register('name', { required: true })} name='name' placeholder="Name" className="input input-bordered" />
            {errors.name && <p className='text-orange-400'> name is required.</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURl</span>
            </label>
            <input type="text" {...register('photoURL', { required: true })}  placeholder="PhotoURL" className="input input-bordered" />
            {errors.photoURL && <p className='text-orange-400'> Photo is required is required.</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register('email')} name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register('password',  { required: true, minLength: 8, maxLength: 20, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} placeholder="password" className="input input-bordered" />
            {errors.password?.type === 'required' && <p className='text-orange-400' >password is required</p>}
            {errors.password?.type === 'minLength' && <p className='text-orange-400' >8 character is required</p>}
            {errors.password?.type === 'maxLength' && <p className='text-orange-400' > maximum 20 character </p>}
            {errors.password?.type === 'pattern' && <p className='text-orange-400' >  one uppercase letter, one lowercase letter, and one number or special character. </p>}

          </div>
          <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-center pb-3 text-orange-400"><small>Already Register ? <Link to='/login'> Please Login</Link> </small></p>
      </div>
    </div>
  </div>
   
   </>
  );
};

export default SignUp;