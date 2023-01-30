import React from 'react'
// import ReactDOM from "react-dom/client";
import { Link} from "react-router-dom";
const Navbar = () => {
  const active=(event)=>{
    let select=document.querySelectorAll('.nav-link');
    // select.map((s)=>{s.classList.remove("active");})
    Array(select);
    for(let i=0;i<select.length;i++){
      select[i].classList.remove("active")
    }
    event.target.classList.add("active")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link  className="navbar-brand"onClick={active} to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item " >
        <Link  className="nav-link "  onClick={active} to="/about">About </Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/contact" onClick={active}>contact</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
