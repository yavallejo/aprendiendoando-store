"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

interface ProductViewItemsOrderProps {
  maxQuantity: number;
}

export const ProductViewItemsOrder = ({
  maxQuantity,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 mt-8">
      <div className="flex gap-x-2 items-center w-fit rounded-lg bg-black">
        <button onClick={handleSubtract}>-</button>
        <p className="text-[1.2rem] font-normal m-0">{counter}</p>
        <button
          onClick={handleAdd}
          className="flex justify-center items-center h-8 w-8 text-2xl font-bold text-red-400 cursor-pointer px-8 py-0 border-[none]"
        >
          +
        </button>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <button
          className="w-full h-12 flex gap-x-2 items-center justify-center font-bold text-[1.2rem] cursor-pointer text-[white] mt-4 mt-auto px-4 py-2 rounded-lg border-[none]"
          type="submit"
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  );
};
