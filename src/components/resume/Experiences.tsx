import ExperienceCarousel from "@/components/resume/ExperienceCarousel";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import {IconBriefcase} from "@tabler/icons-react";
import React from "react";


const Experiences: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-40" title="Resume">
            <IconBriefcase className="size-4"/>
        </TitleBullet>
        <TitleHeading>Work Experience & Education</TitleHeading>
        <ExperienceCarousel/>
    </section>;
};

export default Experiences;
