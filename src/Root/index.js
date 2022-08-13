import React from 'react';
import './../Assets/Style/style.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import {
    Head,
    Navbar
} from '../Components';

export default function index() {
    return (
       <HashRouter>
           <div className="h-screen"> 
                <Head />
                <Navbar />
           </div>
       </HashRouter>
    )
}
