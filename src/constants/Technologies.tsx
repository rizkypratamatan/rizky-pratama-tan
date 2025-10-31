import {TechnologyItem} from "@/types/interfaces/TechnologyItem";
import Image from "next/image";
import React from "react";


const Technologies: TechnologyItem[] = [
    {
        image: <Image src="/images/rust-logo.png" width={40} height={40} alt="Rust Logo"/>,
        name: 'Rust',
        percentage: 95
    },
    {
        image: <Image src="/images/python-logo.png" width={40} height={40} alt="Python Logo"/>,
        name: 'Python',
        percentage: 95
    },
    {
        image: <Image src="/images/javascript-logo.png" width={40} height={40} alt="Javascript Logo"/>,
        name: 'Javascript',
        percentage: 95
    },
    {
        image: <Image src="/images/java-logo.png" width={40} height={40} alt="Java Logo"/>,
        name: 'Java',
        percentage: 85
    },
    {
        image: <Image src="/images/c-plus-plus-logo.png" width={40} height={40} alt="C++ Logo"/>,
        name: 'C++',
        percentage: 75
    },
    {
        image: <Image src="/images/c-sharp-logo.png" width={40} height={40} alt="C# Logo"/>,
        name: 'C#',
        percentage: 75
    },
    {
        image: <Image src="/images/kotlin-logo.png" width={40} height={40} alt="Kotlin Logo"/>,
        name: 'Kotlin',
        percentage: 70
    }
];

export default Technologies;
