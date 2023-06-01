import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const user = {name: loggedUser.displayName, email: loggedUser.email}
        fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
      
        .then(res => res.json())
        .then(()=> {
          navigate (from,  { replace: true })
         })

     

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
      navigate('/')
   

  };

  return (
    <div>
      <div className="divider"></div>
      <div className=" text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
