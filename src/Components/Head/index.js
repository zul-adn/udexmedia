import React from "react";
import { Label } from "../../Common/label";

export default function index() {
  return (
    <div className="header w-full">
      <div className="flex flex-row bg-black text-white justify-space-between px-45 py-15">
        <div>
          <select className="bg-black text-white font-normal font-400 no-border">
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
