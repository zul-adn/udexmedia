import React from "react";
import { Footer, Social } from "../../Datas";

export default function index() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-box">
          <div className="footer-title">
            {Footer.subscribe[0].title.toUpperCase()}
          </div>
          <div className="footer-text-style">{Footer.subscribe[0].text}</div>
        </div>
        <div className="footer-box">
          <div className="footer-title">
            {Footer.about[0].title.toUpperCase()}
          </div>
          <div className="footer-text-style">
            <ul>
              {Footer.about[0].linkList.map((v, i) => (
                <li key={`about-${i}`}>
                  <a>{v.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-title">
            {Footer.informations[0].title.toUpperCase()}
          </div>
          <div className="footer-text-style">
            <ul>
              {Footer.informations[0].linkList.map((v, i) => (
                <li key={`about-${i}`}>
                  <a>{v.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-title">
            {Footer.help[0].title.toUpperCase()}
          </div>
          <div className="footer-text-style">
            <ul>
              {Footer.help[0].linkList.map((v, i) => (
                <li key={`about-${i}`}>
                  <a>{v.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-title">{`FOLLOW US`}</div>
          <div className="social-navbar">
            {Social.map((v, i) => (
              <img key={`social${i}`} src={v.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
