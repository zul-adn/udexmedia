import React from "react";
import { Label } from "../../Common/label";
import { Icon } from "../../Datas/icon";
import { Social } from "../../Datas/social";

export default function index() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div>
          <div className="social-navbar">
            {Social.map((v, i) => (
                <img src={v.icon} />
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://www.hijabistahub.com/site_media/img/logo.png"
            className="title"
          ></img>
        </div>
        <div className="icon-wrapper">
          {Icon.map((v, i) => (
            <div key={`icon${i}`}>
              <img src={v.icon} />
              <span>{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
