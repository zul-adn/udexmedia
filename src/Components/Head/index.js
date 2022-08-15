import React from "react";
import { Label } from "../../Common/label";

export default function index() {
  return (
    <div className="header">
      <div className="header-content">
        <div>
          <select className="currency-select">
            <option className="text-style-white">MYR</option>
            <option className="text-style-white">SGD</option>
            <option className="text-style-white">BND</option>
          </select>
        </div>
        <div className="text-style-white">{Label.welcome}</div>
        <div className="auth text-style-white">{Label.authDropship}</div>
      </div>
    </div>
  );
}
