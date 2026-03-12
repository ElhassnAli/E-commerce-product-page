import ImageSw from "../components/ImageSw";
import LightBox from "../components/LightBox";
import ProductDescription from "../components/ProductDescription";

function Man({ filterCart, lightBox, setLightBox, imageNum, setImageNum }) {
  return (
    <div className="md:flex justify-center md:mt-20 md:items-center ">
      {lightBox && (
        <LightBox
          imageNum={imageNum}
          setImageNum={setImageNum}
          setLightBox={setLightBox}
          lightBox={lightBox}
        />
      )}
      <ImageSw
        lightBox={lightBox}
        setLightBox={setLightBox}
        imageNum={imageNum}
        setImageNum={setImageNum}
      />
      <ProductDescription filterCart={filterCart} />
    </div>
  );
}

export default Man;
