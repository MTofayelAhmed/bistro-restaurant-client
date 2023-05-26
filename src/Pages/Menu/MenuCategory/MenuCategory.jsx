import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title , img}) => {
  return (
    <div className="mt-16 mb-16">
      { title && <Cover img={img} title={title} ></Cover>}
       <div className="grid md:grid-cols-2 gap-10 mt-16 ">
        {
        items.slice(0, 4).map(popular => <MenuItem key={popular._id} popular = {popular}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default MenuCategory;