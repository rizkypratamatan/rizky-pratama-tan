import ServiceItem from "@/types/ServiceItem";
import Image from "next/image";


export const Services: ServiceItem[] = [
    {
        button: {
            href: '/contact',
            text: 'Get Started'
        },
        description: 'Creating compelling web frontend with HTML5, CSS3, Tailwind, Javascript, React. Creative looking and smooth transition and animation rich visual content.',
        heading: {
            description: '52 completed projects',
            heading: 'Frontend Development',
            icon:
                <Image className="select-none" src="/images/service-frontend-development.png" width={50} height={50} alt="Frontend Development Services"/>
        }
    },
    {
        button: {
            href: '/contact',
            text: 'Get Started'
        },
        description: 'Rust, Java, Kotlin, C#, PHP proficiency, production of a robust and stable backend system, enhancing search engine visibility and AI engine optimized.',
        heading: {
            description: '33 completed projects',
            heading: 'Backend Development',
            icon:
                <Image className="select-none" src="/images/service-backend-development.png" width={50} height={50} alt="Backend Development Services"/>
        }
    },
    {
        button: {
            href: '/contact',
            text: 'Get Started'
        },
        description: 'Smart manufacturing and smart home development with C++, will optimize your business and activities through synchronized environment',
        heading: {
            description: '8 completed projects',
            heading: 'IOT Development',
            icon:
                <Image className="select-none" src="/images/service-iot-development.png" width={50} height={50} alt="IOT Development Services"/>
        }
    },
    {
        button: {
            href: '/contact',
            text: 'Get Started'
        },
        description: 'Engineering a robust AI system for predicting and classifying use case into a real world solution.',
        heading: {
            description: '2 completed projects',
            heading: 'AI System Development',
            icon:
                <Image className="select-none" src="/images/service-ai-development.png" width={50} height={50} alt="AI System Development Services"/>
        }
    }
];
