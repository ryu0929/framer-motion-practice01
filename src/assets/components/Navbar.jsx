import React from 'react'
import { motion } from "framer-motion";


import '../css/navbar.css';

const Navbar = () => {
    <>
        <div className="navbar">

            <div className="logo">
                <div className="logo_title">
                    <h2>
                        最高の寿司
                    </h2>
                </div>
            </div>
            <div className="navbar_menu">
                <div className="navbar_menu_items">
                    <p>
                        <a href="#home" className="item">
                            HOME
                        </a>
                    </p>
                </div>
                <div className="navbar_menu_items">
                    <p>
                        <a href="#home" className="item">
                            ABOUT US
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Navbar
