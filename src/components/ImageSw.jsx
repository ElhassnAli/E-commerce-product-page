import { useState } from "react";

function ImageSw() {
  const [imageNum, setImageNum] = useState(1);
  const Image = `/images/image-product-${imageNum}.jpg`;
  return (
    <div className="relative mb-5">
      <button
        onClick={() => setImageNum((e) => (e == 4 ? 1 : e + 1))}
        className="absolute top-[50%] cursor-pointer right-3 bg-white w-8 h-8 flex justify-center items-center rounded-3xl"
      >
        <img
          src="/images/icon-next.svg"
          alt="icon-next"
          className="w-2.5 h-4"
        />
      </button>
      <img
        src={Image}
        alt={`product-${imageNum}`}
        className="w-full h-75 object-cover object-center"
      />
      <button
        onClick={() => setImageNum((e) => (e == 1 ? 4 : e - 1))}
        className="absolute cursor-pointer top-[50%] left-3 bg-white w-8 h-8  flex justify-center items-center rounded-3xl"
      >
        <img
          src="/images/icon-next.svg"
          alt="icon-prev"
          className="transform rotate-180 w-2.5 h-4"
        />
      </button>
    </div>
  );
}

export default ImageSw;
