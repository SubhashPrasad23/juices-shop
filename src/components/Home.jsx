import React, { useState } from "react";
import Header from "./Header";
import CategoryBtn from "./CategoryBtn";
import { items } from "../utils/MockData";
import ItemCard from "./ItemCard";

const Home = () => {
  const [menu, setMenu] = useState(items);

  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-b from-gray-300 to-gray-200 ">
      <Header />
      <div className=" p-5">
        <div className="text-center py-8">
          <b className="text-5xl font-amatic text-gray-800">Go Healthy</b>
        </div>

        <div className="m-auto">
          <div className="grid grid-cols-4 gap-4">
            <CategoryBtn item={items} setmenu={setMenu} />
          </div>
        </div>

        <div className="space-y-1.5 pt-8">
          {menu.map((data, index) => (
            <ItemCard key={index} name={data.name} price={data.price} img={data.img}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
