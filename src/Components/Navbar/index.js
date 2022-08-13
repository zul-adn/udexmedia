import React from "react";
import { Label } from "../../Common/label";

export default function index() {
  return (
    <div className="header w-full">
      <div className="flex flex-row text-black justify-space-between px-45 py-15">
        <div>
         
        </div>
        <div className="font-normal font-400">{Label.title}</div>
        <div className="font-normal font-400">{Label.authDropship}</div>
      </div>
    </div>
  );
}
