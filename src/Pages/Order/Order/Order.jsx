import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'soup', 'pizza', 'dessert', 'drink']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
 
  console.log(category)
  const [menu] = useMenu();
  console.log(menu)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
       <Helmet>
        <title>Bistro Boss | order food</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad </Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
         <OrderTab items= {salad}></OrderTab>
        </TabPanel>
        <TabPanel>
       <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
