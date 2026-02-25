import ImageSw from "../components/ImageSw";
import ProductDescription from "../components/ProductDescription";

function Man({ filterCart }) {
  return (
    <div className="md:flex md:justify-evenly md:mt-20 ">
      <ImageSw />
      <ProductDescription filterCart={filterCart} />
    </div>
  );
}

export default Man;
