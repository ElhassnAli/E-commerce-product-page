import { useState } from "react";

function Button({ filterCart, price }) {
  const [itemsCount, setItemsCount] = useState(0);
  return (
    <div className="md:flex justify-between md:items-center md:justify-start md:gap-10">
      <div className=" flex justify-around gap-20 items-center bg-gray-100 py-4 rounded-[10px] my-5 md:gap-5  md:w-[25%]">
        <button
          onClick={() => setItemsCount((e) => e - 1)}
          disabled={itemsCount === 0}
          className="cursor-pointer"
        >
          <img src="/images/icon-minus.svg" alt="icon-minus" />
        </button>
        <span>{itemsCount}</span>
        <button
          onClick={() => setItemsCount((e) => e + 1)}
          className="cursor-pointer"
        >
          <img src="/images/icon-plus.svg" alt="icon-minus" />
        </button>
      </div>
      <button
        className="flex gap-3 justify-center font-bold w-full  items-center bg-[#ff7d1b] py-4 md:h-fit  rounded-[10px] cursor-pointer md:w-[50%]"
        disabled={itemsCount === 0}
        onClick={() => {
          let object = {
            quantity: itemsCount,
            itemPrice: price,
            itemName: "Fall Limited Edition Sneakers",
            image: "/images/image-product-1-thumbnail.jpg",
          };
          filterCart(object);
          setItemsCount(0);
        }}
      >
        <img src="/images/icon-cart.svg" alt="icon-cart" />
        Add To Cart
      </button>
    </div>
  );
}
export default Button;
