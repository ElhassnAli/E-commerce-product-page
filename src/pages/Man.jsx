import ImageSw from "../components/ImageSw";
import ProductDescription from "../components/ProductDescription";

function Man({ filterCart }) {
  return (
    <>
      <ImageSw />
      <ProductDescription filterCart={filterCart} />
    </>
  );
}

export default Man;
