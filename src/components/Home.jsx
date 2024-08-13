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

      <div className="fixed w-full px-5 backdrop-blur-md  ">
        <div className="text-center  my-5">
          <span className="text-5xl font-semibold font-amatic text-gray-800">
            Go Healthy
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4 py-2 ">
          <CategoryBtn item={items} setmenu={setMenu} />
        </div>
      </div>
      <div className="pb-5 px-5 mt-40 ">
        <div className="space-y-1.5 ">
          {menu.map((data, index) => (
            <ItemCard
              key={index}
              name={data.name}
              price={data.price}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
