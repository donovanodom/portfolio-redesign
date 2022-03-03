import Home from "./Home/Home";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog/Blog";
import Header from "./Header";
import About from "./About/About";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ paddingTop: "88px" }}>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
