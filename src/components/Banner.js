import React from "react";
import "./Banner.css";

const scrollMiddle = () => {

  window.scrollTo(0, 600)
}
const scrollBottom = () => {

  window.scrollTo(0, 1000)
}
const scrollTop = () => {

  window.scrollTo(0,0 )
}

const Banner = () => {
  return (
    <div
      className="menu"
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        textAlign: "right",
        zIndex:1
      }}
    >

      <li class>
        <a className="menu-item" style={{paddingRight:"15px"}} class="smoothScroll" href="#contact" onClick={()=>scrollBottom()}>Contact</a>
      </li>      
      <li class>
        <a className="menu-item" style={{paddingRight:"15px"}} class="smoothScroll" href="#about" onClick={()=>scrollMiddle()}>About</a>
      </li>
      <li class>
        <a className="menu-item" style={{paddingRight:"15px"}} class="smoothScroll" href="#Home \" onClick={()=>scrollTop()}>Home</a>
      </li>
    </div>
  );
};

export default Banner;