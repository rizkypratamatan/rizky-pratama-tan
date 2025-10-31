import {ServiceItem} from "@/types/interfaces/ServiceItem";
import Image from "next/image";
import React from "react";


const Services: ServiceItem[] = [
    {
        buttonHref: '/contact',
        buttonText: 'Get Started',
        description: 'Creating compelling web frontend with HTML5, CSS3, Tailwind, Javascript, React. Creative looking and smooth transition and animation rich visual content.',
        headingDescription: '52 completed projects',
        headingHeading: 'Frontend Development',
        headingIcon:
            <Image className="select-none" src="/images/service-frontend-development.png" width={50} height={50} alt="Frontend Development Services"/>
    },
    {
        buttonHref: '/contact',
        buttonText: 'Get Started',
        description: 'Rust, Java, Kotlin, C#, PHP proficiency, production of a robust and stable backend system, enhancing search engine visibility and AI engine optimized.',
        headingDescription: '33 completed projects',
        headingHeading: 'Backend Development',
        headingIcon:
            <Image className="select-none" src="/images/service-backend-development.png" width={50} height={50} alt="Backend Development Services"/>
    },
    {
        buttonHref: '/contact',
        buttonText: 'Get Started',
        description: 'Smart manufacturing and smart home development with C++, will optimize your business and activities through synchronized environment',
        headingDescription: '8 completed projects',
        headingHeading: 'IOT Development',
        headingIcon:
            <Image className="select-none" src="/images/service-iot-development.png" width={50} height={50} alt="IOT Development Services"/>
    },
    {
        buttonHref: '/contact',
        buttonText: 'Get Started',
        description: 'Engineering a robust AI system for predicting and classifying use case into a real world solution.',
        headingDescription: '2 completed projects',
        headingHeading: 'AI System Development',
        headingIcon:
            <Image className="select-none" src="/images/service-ai-development.png" width={50} height={50} alt="AI System Development Services"/>
    }
];

export default Services;
