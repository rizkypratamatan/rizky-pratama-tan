import EducationItem from "@/components/resume/EducationItem";
import EducationItemLearnMore from "@/components/resume/EducationItemLearnMore";
import TitleBullet from "@/components/TitleBullet";
import EducationFormalsConst from "@/constants/EducationFormals";
import {IconBooks} from "@tabler/icons-react";
import React from "react";


const EducationFormals: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Education">
            <IconBooks className="size-4"/>
        </TitleBullet>
        <div className="resume">
            {EducationFormalsConst.map((formal, index) => (
                <EducationItem key={index} year={formal.year} certificate={formal.certificate} place={formal.place} description={formal.description} buttonText={formal.buttonText}>
                    <EducationItemLearnMore certificate={formal.certificate} place={formal.place} description={formal.description}/>
                </EducationItem>
            ))}
        </div>
    </div>;
};

export default EducationFormals;
