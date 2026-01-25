import ImageSw from "../components/ImageSw";
import ProductDescription from "../components/ProductDescription";

function Man({ setCart }) {
  return (
    <>
      <ImageSw />
      <ProductDescription setCart={setCart} />
    </>
  );
}

export default Man;
