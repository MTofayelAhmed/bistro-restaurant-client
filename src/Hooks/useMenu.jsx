import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useMenu = ()=>{
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading]= useState(true)
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("menu data",data)
  //       setMenu(data)
  //       setLoading(false)
  //       console.log(data);
  //     });
  // }, []);
  // return [menu, loading] 


  const {data: menu = [], isLoading: loadingMenu, refetch}= useQuery({
    queryKey: ['menu'],
    queryFn: async ()=> {
      const res = await fetch('http://localhost:5000/menu')
      return res.json()
    }
  })
  return [menu, loadingMenu, refetch]
}






export default useMenu;