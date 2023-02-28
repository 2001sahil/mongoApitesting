import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './collection/navbar';
import About from './collection/About';
import Contact from './collection/Contact';
import Used from './usecontext';
import Data from './collection/Data';
import Info from './collection/Info';
import Login from './collection/login';
import Signup from './collection/Signup';


function App() {
  return (
    <BrowserRouter>
    <Used>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Data/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Used>
    </BrowserRouter>
  );
}

export default App;
