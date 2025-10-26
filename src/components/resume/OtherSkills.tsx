import OtherSkillLanguages from "@/components/resume/OtherSkillLanguages";
import OtherSkillSoftSkills from "@/components/resume/OtherSkillSoftSkills";
import React from "react";


const OtherSkills: React.FC = async() => {
    return <section className="flex flex-col gap-7.5 pt-15 md:flex-row lg:flex-col xl:flex-row">
        <OtherSkillLanguages/>
        <OtherSkillSoftSkills/>
    </section>;
};

export default OtherSkills;
