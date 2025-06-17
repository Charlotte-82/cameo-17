import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Program from "./pages/Program";
import Partnership from "./pages/Partnership";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/boutique" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/agenda" element={<Program />}></Route>
        <Route path="/partenaires" element={<Partnership />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
