import React, { useState } from "react";

const CategoryBtn = ({ item, setmenu }) => {
  const [active, setActive] = useState("All");
  const categories = ["All", "Juices", "Shakes", "Snacks"];

  const categoryHandler = (category) => {
    setActive(category);
    if (category === "All") {
      setmenu(item);
    } else {
      const filterItem = item.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setmenu(filterItem);
    }
  };

  return (
    <>
      {categories.map((btn) => (
        <button
          key={btn}
          className={`font-amatic tracking-wider shadow-inner  py-2 px-4 font-semibold rounded-xl text-center text-xl  ${
            active === btn
              ? "bg-gradient-to-tl from-green-600 to-green-200 shadow-green-700"
              : " bg-gradient-to-tl from-orange-500 to-yellow-200 shadow-yellow-600 shadow-yellow-600"
          }`}
          onClick={() => categoryHandler(btn)}
        >
          {btn}
        </button>
      ))}
    </>
  );
};

export default CategoryBtn;
