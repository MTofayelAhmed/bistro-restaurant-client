import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter(item=> item.category === 'popular')
        console.log(popularMenu)
        setMenu( popularMenu)
        console.log(data);
      });
  }, []);
  return (
    <section className="mb-10">
      <SectionTitle
        Heading={"from our menu"}
        SubHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
          menu.map(popular => <MenuItem key={popular._id} popular = {popular}></MenuItem>)
        }
      </div>
     <div className=" text-center mt-10">
     <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
     </div>
    </section>
  );
};

export default PopularMenu;
