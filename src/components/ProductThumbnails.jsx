function ProductThumbnails() {
  const imageNumbers = [1, 2, 3, 4];
  return (
    <div className=" flex md:w-[80%] justify-between mt-5">
      {imageNumbers.map((num) => (
        <img
          key={num}
          src={`public/images/image-product-${num}-thumbnail.jpg`}
          alt={`public/images/image-product-${num}-thumbnail.jpg`}
          className="w-25 rounded-2xl "
        />
      ))}
    </div>
  );
}

export default ProductThumbnails;
