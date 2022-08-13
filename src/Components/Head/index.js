import React from "react";
import { Label } from "../../Common/label";

export default function index() {
  return (
    <div className="header">
      <div className="header-content">
        <div>
          <select className="currency-select">
            <option>MYR</option>
            <option>SGD</option>
            <option>BND</option>
          </select>
        </div>
        <div className="font-normal font-400">{Label.welcome}</div>
        <div className="font-normal font-400">{Label.authDropship}</div>
      </div>
    </div>
  );
}
