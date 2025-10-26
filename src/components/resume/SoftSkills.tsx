import SoftSkilltem from "@/components/resume/SoftSkilltem";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import {IconUsersGroup} from "@tabler/icons-react";
import React from "react";


const SoftSkills: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleHeading>General Skills</TitleHeading>
        <TitleBullet className="w-53" title="Communication">
            <IconUsersGroup size={16}/>
        </TitleBullet>
        <div className="grid grid-cols-2 gap-7.5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <SoftSkilltem percentage={90} name="Critical Thinking"/>
            <SoftSkilltem percentage={90} name="Algorithmic Thinking"/>
            <SoftSkilltem percentage={80} name="Leadership"/>
            <SoftSkilltem percentage={80} name="Collaborative"/>
            <SoftSkilltem percentage={80} name="Time Management"/>
            <SoftSkilltem percentage={80} name="Emphaty"/>
        </div>
    </section>;
};

export default SoftSkills;
