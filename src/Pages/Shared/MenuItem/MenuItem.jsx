

const MenuItem = ({popular}) => {
  const {price, name, recipe, image}= popular
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px], h-[104px]" src={image} alt="" />
      <div className=" text-gray-500" >
        <h2 className="uppercase">{name}-----------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;