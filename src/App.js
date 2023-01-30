import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navbar';
import About from './About';
import Contact from './Contact';
import Used from './usecontext';
import Data from './Data';
import Info from './Info';


function App() {
  return (
    <BrowserRouter>
    <Used>
      <Navbar />
      <Info/>
      <Routes>
        <Route exact path="/" element={<Data/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Used>
    </BrowserRouter>
  );
}

export default App;
