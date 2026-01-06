import Service from "@/components/home/Service";
import ServiceDescription from "@/components/home/ServiceDescription";
import ServiceHeading from "@/components/home/ServiceHeading";
import TitleBullet from "@/components/ui/TitleBullet";
import TitleHeading from "@/components/ui/TitleHeading";
import {Services} from "@/constants/Services";
import ServiceItem from "@/types/ServiceItem";
import {IconSettingsCode} from "@tabler/icons-react";
import Link from "next/link";


export default async function ServiceContainer() {
    return <section>
        <TitleBullet className="w-35 md:w-40" title="Expertise">
            <IconSettingsCode className="size-4"/>
        </TitleBullet>
        <TitleHeading>What Services I Provide ?</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {Services.map((service: ServiceItem, index: number) =>
                <Service key={index}>
                    <ServiceHeading description={service.heading.description} heading={service.heading.heading}>
                        {service.heading.icon}
                    </ServiceHeading>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <Link className="text-sm uppercase underline md:text-base" href={service.button.href} aria-label={service.button.text}>{service.button.text}</Link>
                </Service>)}
        </div>
    </section>;
}
