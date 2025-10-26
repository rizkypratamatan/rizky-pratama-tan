import ServiceItem from "@/components/home/ServiceItem";
import ServiceItemDescription from "@/components/home/ServiceItemDescription";
import ServiceItemHeading from "@/components/home/ServiceItemHeading";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import {IconSettingsCode} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Services: React.FC = async() => {
    return <section>
        <TitleBullet className="w-35 md:w-40" title="Expertise">
            <IconSettingsCode size={16}/>
        </TitleBullet>
        <TitleHeading>What Services I Provide ?</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <ServiceItem>
                <ServiceItemHeading description="52 completed projects" heading="Frontend Development">
                    <Image className="select-none" src="/images/service-frontend-development.png" width={50} height={50} alt="Fronten Development Services"/>
                </ServiceItemHeading>
                <ServiceItemDescription>Creating compelling web frontend with HTML5, CSS3, Tailwind, Javascript,
                    React. Creative looking and smooth transition and animation rich visual content.
                </ServiceItemDescription>
                <Link className="text-sm uppercase underline md:text-base" href="/contact/" aria-label="Get Started">Get
                    Started</Link>
            </ServiceItem>
            <ServiceItem>
                <ServiceItemHeading description="33 completed projects" heading="Backend Development">
                    <Image className="select-none" src="/images/service-backend-development.png" width={50} height={50} alt="Backend Development Services"/>
                </ServiceItemHeading>
                <ServiceItemDescription>Rust, Java, Kotlin, C#, PHP proficiency, production of a robust and stable
                    backend system, enhancing search engine visibility and AI engine optimized.
                </ServiceItemDescription>
                <Link className="text-sm uppercase underline md:text-base" href="/contact/" aria-label="Get Started">Get
                    Started</Link>
            </ServiceItem>
            <ServiceItem>
                <ServiceItemHeading description="8 completed projects" heading="IOT Development">
                    <Image className="select-none" src="/images/service-iot-development.png" width={50} height={50} alt="IOT Development Services"/>
                </ServiceItemHeading>
                <ServiceItemDescription>Smart manufacturing and smart home development with C++, will optimize
                    your business and activities through synchronized environment
                </ServiceItemDescription>
                <Link className="text-sm uppercase underline md:text-base" href="/contact/" aria-label="Get Started">Get
                    Started</Link>
            </ServiceItem>
            <ServiceItem>
                <ServiceItemHeading description="2 completed projects" heading="AI System Development">
                    <Image className="select-none" src="/images/service-ai-development.png" width={50} height={50} alt="AI System Development Services"/>
                </ServiceItemHeading>
                <ServiceItemDescription>Engineering a robust AI system for predicting and classifying use case
                    into a real world solution.</ServiceItemDescription>
                <Link className="text-sm uppercase underline md:text-base" href="/contact/" aria-label="Get Started">Get
                    Started</Link>
            </ServiceItem>
        </div>
    </section>;
};

export default Services;
