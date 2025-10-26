"use client";

import React from "react";
import {TypeAnimation} from "react-type-animation";


const TypingText: React.FC = () => {
    return <div className="grow pl-4.5 py-2.5 xs:hidden">
        <h1 className="leading-5.75 text-base-l font-semibold line-clamp-1">{process.env.NEXT_PUBLIC_PROFILE_NAME}</h1>
        <p className="h-4.75 text-xs-l text-primary-100 line-clamp-1">
            <TypeAnimation
                cursor={false}
                sequence={['Rust Programmer', 1000, 'React Programmer', 1000,
                    'Python Programmer', 1000, 'Javascript Programmer', 1000,
                    'Java Programmer', 1000, 'IOT Developer', 1000,
                ]} speed={50} repeat={Infinity}/>
        </p>
    </div>;
};

export default TypingText;
