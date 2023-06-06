import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const image_key = import.meta.env.VITE_image_upload_key;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_key}`;
  const {
    register,
    handleSubmit,
   reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const image = imgResponse.data.display_url;

          const { name, category, price, recipe } = data;
          const newItem = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image: image,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu Item", data.data);
            if (data.data.insertedId) {
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: " menu has been saved at database",
                showConfirmButton: false,
                timer: 1500,
              });
             
            }
          });
        }
      });
  };
 

  return (
    <div className="w-Full px-10">
      <SectionTitle
        SubHeading="whats new"
        Heading=" add an Item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name* </span>
          </label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 100 })}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select
            defaultValue="Pick one"
            {...register("category", { required: true, maxLength: 100 })}
            className="select select-bordered"
          >
            <option disabled>Pick one</option>
            <option>Pizza</option>
            <option>Salad</option>
            <option>Drinks</option>
            <option>Dessert</option>
            <option>Soup</option>
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price* </span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true, maxLength: 100 })}
            className="textarea textarea-bordered h-24"
            placeholder="Details"
          ></textarea>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            {...register("image", { required: true, maxLength: 100 })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
