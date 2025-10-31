import SoftSkilltem from "@/components/resume/SoftSkilltem";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import SoftSkillsConst from "@/constants/SoftSkills";
import {IconUsersGroup} from "@tabler/icons-react";
import React from "react";


const SoftSkills: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleHeading>General Skills</TitleHeading>
        <TitleBullet className="w-53" title="Communication">
            <IconUsersGroup className="size-4"/>
        </TitleBullet>
        <div className="grid grid-cols-2 gap-7.5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {SoftSkillsConst.map((skill, index) => (
                <SoftSkilltem key={index} percentage={skill.percentage} name={skill.name}/>
            ))}
        </div>
    </section>;
};

export default SoftSkills;
