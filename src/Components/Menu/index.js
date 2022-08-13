import React from "react";
import { Menu } from "./../../Datas";

export default function index() {
  return (
    <div>
      <nav className="menu">
        <ul>
          {Menu.map((v, i) => (
            <li key={`menu-${i}`}>
              <a>{v.name.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="target"></span>
    </div>
  );
}
