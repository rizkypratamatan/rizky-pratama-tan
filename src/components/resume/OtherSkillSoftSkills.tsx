import OtherSkillSoftSkillItem from "@/components/resume/OtherSkillSoftSkillItem";
import TitleBullet from "@/components/TitleBullet";
import OtherSkillSoftSkillsConst from "@/constants/OtherSkillSoftSkills";
import {IconList} from "@tabler/icons-react";
import React from "react";


const OtherSkillSoftSkills: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Soft Skills">
            <IconList className="size-4"/>
        </TitleBullet>
        <div className="flex flex-col gap-2.5 py-5">
            {OtherSkillSoftSkillsConst.map((otherSkillSoftSkill, index) => (
                <OtherSkillSoftSkillItem key={index}>{otherSkillSoftSkill.name}</OtherSkillSoftSkillItem>
            ))}
        </div>
    </div>;
};

export default OtherSkillSoftSkills;
