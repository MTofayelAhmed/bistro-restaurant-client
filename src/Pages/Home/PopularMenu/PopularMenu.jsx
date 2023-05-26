
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {

  const [menu]= useMenu()
  const popular = menu.filter (item => item.category === 'popular')
 
  return (
    <section className="mb-10">
      <SectionTitle
        Heading={"from our menu"}
        SubHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
         popular.map(popular => <MenuItem key={popular._id} popular = {popular}></MenuItem>)
        }
      </div>
     <div className=" text-center mt-10">
     <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
     </div>
    </section>
  );
};

export default PopularMenu;
