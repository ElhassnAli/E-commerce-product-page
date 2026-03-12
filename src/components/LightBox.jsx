import React from "react";
import ProductThumbnails from "./ProductThumbnails";

export default function LightBox({
  setLightBox,
  lightBox,
  imageNum,
  setImageNum,
}) {
  const Image = `/images/image-product-${imageNum}.jpg`;
  const TOTAL_IMAGES = 4;
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex-col justify-center items-center hidden md:flex">
      <div className="w-[30%]">
        <button
          onClick={() => setLightBox(false)}
          className=" cursor-pointer flex justify-end w-full relative z-10"
        >
          <img
            src="/images/icon-close.svg"
            alt="icon-close"
            className=" w-6  mb-3 fill-[#ff7d1b] "
          />
        </button>

        <div className="mb-20">
          <div className="relative">
            <button
              onClick={() =>
                setImageNum((e) => (e === 1 ? TOTAL_IMAGES : e - 1))
              }
              className="absolute cursor-pointer top-[50%] -left-6 bg-white w-12 h-12  flex justify-center items-center rounded-3xl "
            >
              <img
                src="/images/icon-next.svg"
                alt="icon-prev"
                className="transform rotate-180 w-4 h-5.5 "
              />
            </button>
            <img
              src={Image}
              alt={Image}
              className="object-center rounded-3xl"
            />
            <button
              onClick={() =>
                setImageNum((e) => (e === TOTAL_IMAGES ? 1 : e + 1))
              }
              className="absolute top-[50%]  cursor-pointer -right-6 bg-white w-12 h-12 flex justify-center items-center rounded-3xl"
            >
              <img
                src="/images/icon-next.svg"
                alt="icon-next"
                className="w-4 h-5.5 "
              />
            </button>
          </div>

          <ProductThumbnails
            lightBox={lightBox}
            imageNum={imageNum}
            setImageNum={setImageNum}
          />
        </div>
      </div>
    </div>
  );
}
