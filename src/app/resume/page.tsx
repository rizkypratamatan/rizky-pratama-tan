import Educations from "@/components/resume/Educations";
import Experiences from "@/components/resume/Experiences";
import OtherSkills from "@/components/resume/OtherSkills";
import SoftSkills from "@/components/resume/SoftSkills";
import Technologies from "@/components/resume/Technologies";
import Tools from "@/components/resume/Tools";
import React from "react";


const Resume: React.FC = async() => {
    return <React.Fragment>
        <Experiences/>
        <Educations/>
        <Technologies/>
        <Tools/>
        <SoftSkills/>
        <OtherSkills/>
    </React.Fragment>;
};

export default Resume;
