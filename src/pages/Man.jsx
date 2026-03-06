import ImageSw from "../components/ImageSw";
import ProductDescription from "../components/ProductDescription";

function Man({ filterCart }) {
  return (
    <div className="md:flex justify-center md:mt-20 md:items-center ">
      <ImageSw />
      <ProductDescription filterCart={filterCart} />
    </div>
  );
}

export default Man;
