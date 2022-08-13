import React from "react";
import { Category } from "../../Datas";

export default function index() {
  return (
    <div className="category">
      <div className="category-container">
        {Category.map((v, i) => (
          <img
            key={`category-${i}`}
            className="category-item"
            src={v.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
