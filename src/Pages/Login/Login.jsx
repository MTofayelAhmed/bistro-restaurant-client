import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,

  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const {login}= useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      Swal.fire(
        'SuccessFully login',
        'You clicked the button!',
        'success'
      )
      navigate (from,  { replace: true })
    })
    .catch(error=> {
      const Error = error.message 
      console.log(Error)
    })
  };



  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };

  return (
   <>
    <Helmet>
   <title>Bistro Boss |Login</title>
   </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="text-center w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6"></p>
        </div>
        <form
          onSubmit={handleLogin}
          className="card w-1/2  shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
               onBlur={handleValidateCaptcha}
       
                type="text"
                name="captcha"
                placeholder="write down the above captcha"
                className="input input-bordered"
              />
             
            </div>
            {/* TODO: enable button for captcha */}
            <div className="form-control mt-6">
              <input
                // disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </div>
          <p className="text-center pb-3 text-orange-400"><small>New Here ? <Link to='/signup'> Create a New Account</Link> </small></p>
        </form>
       
      </div>
    </div>
   
   </>
  );
};

export default Login;
