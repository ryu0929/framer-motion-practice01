import React from 'react'
// import { useState } from 'react'
import Navbar from './Navbar'
import Sushi from './Sushi'

import '../css/landing.css'

import imgR from '../../public/images/01.jpg';
import imgL from '../../public/images/02.jpg';
import imgT from '../../public/images/03.jpg';
import imgB from '../../public/images/04.jpg';

// import { motion } from "framer-motion";

const Landing = () => {
    <>
    <Navbar />
    <div className="landingpage section_padding" id="home">

      <div className="sushi">
        <Sushi className="left" imgurl={imgL}/>
        <Sushi className="top" imgurl={imgT}/>
        <Sushi className="bottom" imgurl={imgB}/>
        <Sushi className="right" imgurl={imgR}/>
      </div>

      <div className="maintext_name">
        <div className="uptext">
          <h5>
            Best Japanese <span>Sushi</span>
          </h5>
        </div>
        <div className="middletext">
          <h2>Sushi Section</h2>
        </div>
        <div className="lowtext">
          <h6>Your favorite sushi store onions</h6>
        </div>
      </div>

    </div>
    </>
}

export default Landing
