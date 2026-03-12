function ProductThumbnails({ setImageNum, imageNum, lightBox }) {
  const imageNumbers = [1, 2, 3, 4];
  return (
    <div
      className={`flex ${lightBox ? "md:w-fu" : ""}md:w-[80%] justify-between mt-5 items-center`}
    >
      {imageNumbers.map((num) => (
        <div
          key={num}
          onClick={() => setImageNum(num)}
          className={`w-25 rounded-2xl cursor-pointer bg-white  overflow-hidden ${imageNum === num ? "border-3 border-[#ff7d1b]" : ""}`}
        >
          <img
            src={`/images/image-product-${num}-thumbnail.jpg`}
            alt={`/images/image-product-${num}-thumbnail.jpg`}
            className={`w-full ${imageNum === num ? "opacity-50" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductThumbnails;
