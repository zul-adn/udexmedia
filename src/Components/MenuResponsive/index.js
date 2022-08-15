import React from "react";
import { Menu } from "../../Datas";

export default function index() {
  const closeResponsiveMenu = () => {
    document.querySelector(".menu-mobile").style.left = "-300px";
    document.querySelector(".h-screen").style.overflowY = "scroll";
  };

  return (
    <div className="menu-mobile">
      <div className="close-icon">
        <img
          onClick={closeResponsiveMenu}
          src="https://cdn-icons-png.flaticon.com/512/59/59836.png"
        />
      </div>
      <nav className="menu-mobile-items">
        <ul>
          {Menu.map((v, i) => (
            <li key={`menu-${i}`}>
              <a>{v.name.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
