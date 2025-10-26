"use client";

import React from "react";
import {TypeAnimation} from "react-type-animation";


const TypingText: React.FC = () => {
    return <div className="typed">
        <TypeAnimation
            cursor={false}
            sequence={['Rust Programmer', 1000, 'React Programmer', 1000,
                'Python Programmer', 1000, 'Javascript Programmer', 1000,
                'Java Programmer', 1000, 'IOT Developer', 1000,
            ]} speed={50} repeat={Infinity}/>
    </div>;
};

export default TypingText;
