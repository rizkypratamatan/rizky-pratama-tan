import ServiceItem from "@/components/home/ServiceItem";
import ServiceItemDescription from "@/components/home/ServiceItemDescription";
import ServiceItemHeading from "@/components/home/ServiceItemHeading";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import ServicesConst from "@/constants/Services";
import {IconSettingsCode} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";


const Services: React.FC = async() => {
    return <section>
        <TitleBullet className="w-35 md:w-40" title="Expertise">
            <IconSettingsCode className="size-4"/>
        </TitleBullet>
        <TitleHeading>What Services I Provide ?</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {ServicesConst.map((service, index) => (
                <ServiceItem key={index}>
                    <ServiceItemHeading description={service.headingDescription} heading={service.headingHeading}>
                        {service.headingIcon}
                    </ServiceItemHeading>
                    <ServiceItemDescription>{service.description}</ServiceItemDescription>
                    <Link className="text-sm uppercase underline md:text-base" href={service.buttonHref} aria-label={service.buttonText}>{service.buttonText}</Link>
                </ServiceItem>
            ))}
        </div>
    </section>;
};

export default Services;
