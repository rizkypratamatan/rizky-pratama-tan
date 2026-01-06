"use client";

import {TypeAnimation} from "react-type-animation";


export default function TypingText() {
    return <TypeAnimation cursor={false} sequence={['Rust Programmer', 1000, 'React Programmer', 1000, 'Python Programmer', 1000, 'Javascript Programmer', 1000, 'Java Programmer', 1000, 'IOT Developer', 1000,]} speed={50} repeat={Infinity}/>;
}
