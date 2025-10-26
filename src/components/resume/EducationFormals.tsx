import EducationItem from "@/components/resume/EducationItem";
import EducationItemLearnMore from "@/components/resume/EducationItemLearnMore";
import TitleBullet from "@/components/TitleBullet";
import {IconBooks} from "@tabler/icons-react";
import React from "react";


const EducationFormals: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Education">
            <IconBooks size={16}/>
        </TitleBullet>
        <div className="resume">
            <EducationItem year="2010" certificate="Bachelor of Science" place="Gunadarma, ID" description="Bachelor's degree in computer science, software engineer, and a related field." buttonText="Learn More">
                <EducationItemLearnMore certificate="Bachelor of Science" place="Gunadarma, ID" description="Bachelor's degree in computer science, software engineer, and a related field."/>
            </EducationItem>
            <EducationItem year="2007" certificate="Senior High School" place="SMAN 3 Depok, ID" description="Senior high school graduated studies." buttonText="Learn More">
                <EducationItemLearnMore certificate="Senior High School" place="SMAN 3 Depok, ID" description="Senior high school graduated studies."/>
            </EducationItem>
            <EducationItem year="2004" certificate="Junior High School" place="SMPN 4 Depok, ID" description="Junior high school graduated studies." buttonText="Learn More">
                <EducationItemLearnMore certificate="Junior High School" place="SMPN 4 Depok, ID" description="Junior high school graduated studies."/>
            </EducationItem>
        </div>
    </div>;
};

export default EducationFormals;
