import OtherSkillSoftSkillItem from "@/components/resume/OtherSkillSoftSkillItem";
import TitleBullet from "@/components/TitleBullet";
import {IconList} from "@tabler/icons-react";
import React from "react";


const OtherSkillSoftSkills: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Soft Skills">
            <IconList size={16}/>
        </TitleBullet>
        <div className="flex flex-col gap-2.5 py-5">
            <OtherSkillSoftSkillItem>Critical thinking and analytical skills</OtherSkillSoftSkillItem>
            <OtherSkillSoftSkillItem>Strong problem-solving skills</OtherSkillSoftSkillItem>
            <OtherSkillSoftSkillItem>Attention to detail</OtherSkillSoftSkillItem>
            <OtherSkillSoftSkillItem>Creative Problem-Solving</OtherSkillSoftSkillItem>
            <OtherSkillSoftSkillItem>Continuous Learning</OtherSkillSoftSkillItem>
        </div>
    </div>;
};

export default OtherSkillSoftSkills;
