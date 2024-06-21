import React from 'react'

import { motion } from "framer-motion";

import '../css/sushi.css';

const Sushi = ({className, imgurl}) => {
    return (
        <>
            <div className="sushi_img">
                <img className={className} src={imgurl} />
            </div>
        </>
    );
}

export default Sushi
