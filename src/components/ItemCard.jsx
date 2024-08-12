import React from "react";

const ItemCard = ({ name, price, img }) => {
  return (
    <div className="font-semibold shadow-inner shadow-yellow-600 bg-gradient-to-tr from-orange-400 to-yellow-200   rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex gap-4 p-3">
        <div className=" bg-gray-200 rounded-full flex items-center justify-center shadow-inner p-2">
          <img src={img} alt="" className="h-12 w-12 "/>
        </div>
        <div className="font-amatic text-gray-800">
          <h4 className="text-2xl tracking-wide font-semibold">{name}</h4>
          <span className="text-xl ">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
