import ProductThumbnails from "./ProductThumbnails";

const TOTAL_IMAGES = 4;
function ImageSw({ setLightBox, imageNum, setImageNum }) {
  const Image = `/images/image-product-${imageNum}.jpg`;
  return (
    <div className="relative mb-5 md:w-[40%]">
      <div>
        <button
          onClick={() => setImageNum((e) => (e === TOTAL_IMAGES ? 1 : e + 1))}
          className="absolute top-[50%]  md:hidden cursor-pointer right-3 bg-white w-8 h-8 flex justify-center items-center rounded-3xl"
        >
          <img
            src="/images/icon-next.svg"
            alt="icon-next"
            className="w-2.5 h-4 "
          />
        </button>
        <img
          src={Image}
          alt={`product-${imageNum}`}
          className="w-full h-90  object-center md:h-full md:rounded-2xl md:w-[80%]  "
          onClick={() => setLightBox(true)}
        />
        <button
          onClick={() => setImageNum((e) => (e === 1 ? TOTAL_IMAGES : e - 1))}
          className="absolute cursor-pointer top-[50%] left-3 bg-white w-8 h-8  flex justify-center items-center rounded-3xl md:hidden"
        >
          <img
            src="/images/icon-next.svg"
            alt="icon-prev"
            className="transform rotate-180 w-2.5 h-4 "
          />
        </button>
      </div>
      <div className="w-full hidden md:block">
        <ProductThumbnails setImageNum={setImageNum} imageNum={imageNum} />
      </div>
    </div>
  );
}

export default ImageSw;
