import Button from "../components/Button";

function ProductDescription() {
  const price = 250;
  const discountPercentage = 50;
  return (
    <div className="px-4">
      <h3 className="opacity-60 text-[14px] font-medium tracking-wider">
        SNEAKERS COMPANY
      </h3>
      <h1 className="text-2xl md:w-full font-bold py-2">
        Fall Limited Edition <br />
        Sneakers
      </h1>
      <p className="opacity-60 text-left mb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <h5 className="flex justify-between items-center font-bold">
        <p className="flex gap-10 items-center">
          <span className="text-2xl ">
            ${(price * discountPercentage) / 100}
          </span>{" "}
          <span className=" bg-black text-white px-2 rounded-[5px]">
            {discountPercentage}%
          </span>
        </p>
        <span className="line-through">${price}.00</span>
      </h5>
      <Button />
    </div>
  );
}

export default ProductDescription;
