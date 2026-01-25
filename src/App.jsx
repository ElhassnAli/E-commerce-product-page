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
  console.log(cart);

  return (
    <div
      className={` md:w-[80%] md:m-auto  h-dvh font-display ${isOpen ? "bg-black/20" : ""}`}
      onClick={() => isOpen && setIsOpen(false)}
    >
      <BrowserRouter>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} cartItems={cart} />
        <Routes>
          <Route path="/" element={<Man setCart={setCart} />} />
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
