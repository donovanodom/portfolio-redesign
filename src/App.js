import Home from "./Home/Home";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog/Blog";
import Header from "./Header";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="cur-pad">
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
