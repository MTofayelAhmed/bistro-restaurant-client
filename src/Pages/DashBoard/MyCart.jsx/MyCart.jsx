import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import {FaRegTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
fetch(`http://localhost:5000/carts/${item._id}`, {
  method: "DELETE"
})
.then(res => res.json())
.then(data => {
 if( data.deletedCount> 0) {
  refetch();
      Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ) }} )


      
      }
    })
  }



  return (
    <div>
      <Helmet>
        <title> Bistro Boss | My Cart</title>
      </Helmet>
      <div>
        <SectionTitle
          Heading="add more"
          SubHeading="..my cart.."
        ></SectionTitle>
      </div>
      <div className="uppercase flex justify-evenly items-center h-[64px]">
        <h3 className=" text-3xl ">Total Items: {cart.length}</h3>
        <h3 className=" text-3xl ">Total Price: ${total.toFixed(2)}</h3>
        <button className="btn btn-outline btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              #
              </th>
              <th>Item Img</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            cart.map(item=>  <tr key= {item._id} >
            
              <td>
               
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
        
                 
                </div>
              </td>
              <td>
               {item.name}
              </td>
              <td className="text-end">
            ${item.price}
                </td>

              <td>
                <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg bg-red-600 text-white "><FaRegTrashAlt></FaRegTrashAlt> </button>
              </td>
            </tr>)
          }
           
            
          </tbody>
         
         
        </table>
      </div>
    </div>
  );
};

export default MyCart;
