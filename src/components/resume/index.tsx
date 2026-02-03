import Education from "@/components/resume/Education";
import ExperienceContainer from "@/components/resume/ExperienceContainer";
import OtherSkill from "@/components/resume/OtherSkill";
import SoftSkill from "@/components/resume/SoftSkill";
import Technology from "@/components/resume/Technology";
import Tool from "@/components/resume/Tool";
import {Fragment} from "react";


export default async function Resume() {
    return <Fragment>
        <ExperienceContainer/>
        <Education/>
        <Technology/>
        <Tool/>
        <SoftSkill/>
        <OtherSkill/>
    </Fragment>;
}
