import { BrowserRouter, Route, Routes } from "react-router-dom";
import Man from "./pages/Man";
import Woman from "./pages/Women";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Man />} />
        <Route path="woman" element={<Woman />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
