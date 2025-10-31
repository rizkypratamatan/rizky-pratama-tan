import TechnologyItem from "@/components/resume/TechnologyItem";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import TechnologiesConst from "@/constants/Technologies";
import {IconBarbellFilled} from "@tabler/icons-react";
import React from "react";


const Technologies: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-38 md:w-43" title="Hard Skills">
            <IconBarbellFilled className="size-4"/>
        </TitleBullet>
        <TitleHeading>Technology Stack</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
            {TechnologiesConst.map((technology, index) => (
                <TechnologyItem key={index} stack={technology.name} percentage={technology.percentage}>
                    {technology.image}
                </TechnologyItem>
            ))}
        </div>
    </section>;
};

export default Technologies;
