import Button from "../components/Button";

function ProductDescription({ filterCart }) {
  const priceBeforeDiscounted = 250;
  const discountPercentage = 50;
  const PriceAfterDiscounted =
    (priceBeforeDiscounted * discountPercentage) / 100;
  return (
    <div className="px-4 pb-5 md:w-[40%]">
      <h3 className="opacity-60 text-[14px]  tracking-wider md:text-1xl font-bold md:pb-5">
        SNEAKERS COMPANY
      </h3>
      <h1 className="text-2xl md:w-full font-bold py-2 md:text-5xl md:pb-5">
        Fall Limited Edition <br />
        Sneakers
      </h1>
      <p className="opacity-60 text-left mb-6 md:text-[20px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <h5 className="flex md:block justify-between items-center font-bold ">
        <div className="flex gap-10 items-center md:pb-4">
          <span className="text-2xl md:text-5xl">${PriceAfterDiscounted}</span>
          <span className=" bg-black text-white px-2 rounded-[5px]">
            {discountPercentage}%
          </span>
        </div>
        <span className="line-through md:text-[20px] text-gray-500">
          ${priceBeforeDiscounted}.00
        </span>
      </h5>
      <Button filterCart={filterCart} price={PriceAfterDiscounted} />
    </div>
  );
}

export default ProductDescription;
