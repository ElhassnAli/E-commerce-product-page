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

  return (
    <div
      className={` md:w-[80%] md:m-auto p-2 h-dvh ${isOpen ? "bg-black/20" : ""}`}
      onClick={() => isOpen && setIsOpen(false)}
    >
      <BrowserRouter>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/" element={<Man />} />
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
