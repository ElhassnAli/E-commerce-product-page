import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Man from "./pages/Man";
import Woman from "./pages/Women";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Header from "./components/Header";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [lightBox, setLightBox] = useState(false);
  const [imageNum, setImageNum] = useState(1);
  console.log(cart);

  function filterCart(i) {
    const isExist = cart.some((item) => item.itemName === i.itemName);
    if (!isExist) {
      setCart((e) => [...e, i]);
    }
  }
  function deleteProduct(productName) {
    setCart(cart.filter((e) => e.itemName !== productName));
  }
  function CheckoutOrder() {
    setCart([]);
    setIsOpen(false);
  }
  return (
    <div
      className={` md:w-[80%] md:m-auto  h-dvh font-display ${isOpen ? "bg-black/20" : ""}`}
      onClick={() => isOpen && setIsOpen(false)}
    >
      <BrowserRouter basename="E-commerce-product-page">
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          cartItems={cart}
          deleteProduct={deleteProduct}
          CheckoutOrder={CheckoutOrder}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Man
                filterCart={filterCart}
                lightBox={lightBox}
                setLightBox={setLightBox}
                imageNum={imageNum}
                setImageNum={setImageNum}
              />
            }
          />
          <Route path="woman" element={<Woman />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
