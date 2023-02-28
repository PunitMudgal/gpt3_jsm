import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { HiX ,HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="vite__navbar">
      <div className="vite__navbar-links">
        <div className="vite__navbar-links_logo">
         <img src={logo} alt="not found!" />
        </div>
        <div className="vite__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatGPT3">What is GPT</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="vite__navbar-login">
        <p>sign in</p>
        <button>Log in</button>
      </div>

{/* for mobile screen  */}
      <div className="vite__navbar-menu">
        {toggleMenu ? (
          <HiX
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt3
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="vite__navbar-menu_container slide-in-top">
            <div className="vite__navbar-menu_container-links">
            <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatGPT3">What is GPT</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
            </div>
            <div className="vite__navbar-menu_container-login">
              <p>sign in</p>
              <button>Log in</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
