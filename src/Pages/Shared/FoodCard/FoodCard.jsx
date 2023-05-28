
const FoodCard = ({item}) => {
  const {price, name, recipe, image}= item
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <p className=" absolute right-0 mt-4 mr-6 rounded p-2 text-white bg-gray-700 ">${price}</p>
    <div className="card-body flex flex-col items-center">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-outline border-0 border-b-4 mt-4 border-orange-300  bg-slate-100">Add to cart</button>
      </div>
    </div>
  </div>)
};

export default FoodCard;