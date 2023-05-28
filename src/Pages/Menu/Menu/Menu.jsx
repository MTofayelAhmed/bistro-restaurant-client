import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* menu main Cover image */}
      <Cover img={menuImg} title="our menu"></Cover>

      {/* offered section title */}
      <SectionTitle
        Heading="Todays Offer"
        SubHeading="do not miss"
      ></SectionTitle>
      {/* offer item */}
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        img={dessertImg}
        title="dessert"
        items={desserts}
      ></MenuCategory>
      
      <MenuCategory img={soupImg} title="soup" items={soup}></MenuCategory>
      <MenuCategory img={pizzaImg} title="pizza" items={pizza}></MenuCategory>
      <MenuCategory img={saladImg} title="salad" items={salad}></MenuCategory>
    </div>
  );
};

export default Menu;
