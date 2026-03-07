function ProductThumbnails({ setImageNum, imageNum }) {
  const imageNumbers = [1, 2, 3, 4];
  return (
    <div className=" flex md:w-[80%] justify-between mt-5">
      {imageNumbers.map((num) => (
        <div
          key={num}
          onClick={() => setImageNum(num)}
          className={`w-25 rounded-2xl cursor-pointer bg-white  overflow-hidden ${imageNum === num ? "border-3 border-[#ff7d1b]" : ""}`}
        >
          <img
            src={`public/images/image-product-${num}-thumbnail.jpg`}
            alt={`public/images/image-product-${num}-thumbnail.jpg`}
            className={`w-full ${imageNum === num ? "opacity-50" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductThumbnails;
