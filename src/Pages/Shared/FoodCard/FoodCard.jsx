import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
  const {price, name, recipe, image}= item
  const {user}= useContext(AuthContext)
  const navigate = useNavigate()

  const handleCart = (item)=>{
    if(user){
      fetch('http://localhost:5000/carts')
      .then(res=> res.json())
      .then(data=> {
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'item added to cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      

      })
    }
    else{
      Swal.fire({
        title: 'please Login First',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, i will log!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
    console.log(item)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <p className=" absolute right-0 mt-4 mr-6 rounded p-2 text-white bg-gray-700 ">${price}</p>
    <div className="card-body flex flex-col items-center">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions justify-end">
        <button onClick={()=>{ handleCart(item)}} className="btn btn-outline border-0 border-b-4 mt-4 border-orange-300  bg-slate-100">Add to cart</button>
      </div>
    </div>
  </div>)
};

export default FoodCard;