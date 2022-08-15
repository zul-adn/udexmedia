import React from "react";
import "./../Assets/Style/style.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import MainPage from "../Screens/Main";
import { Head, Navbar, Menu, Footer, MenuResponsive } from "../Components";

export default function index() {
  return (
    <HashRouter>
      <MenuResponsive />
      <div className="h-screen">
        <Head />
        <div className="sticky">
          <Navbar />
          <Menu />
        </div>
        <Route exact path="/" component={MainPage} />
        {/* <Route path="/detail" component={DetailPage} />
        <Route path="/r" component={ResultPage} /> */}
        <Footer />
      </div>
    </HashRouter>
  );
}
