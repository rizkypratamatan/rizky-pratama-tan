import OtherSkillLanguageItem from "@/components/resume/OtherSkillLanguageItem";
import TitleBullet from "@/components/TitleBullet";
import OtherSkillLanguagesConst from "@/constants/OtherSkillLanguages";
import {IconLanguage} from "@tabler/icons-react";
import React from "react";


const OtherSkillLanguages: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Languages">
            <IconLanguage className="size-4"/>
        </TitleBullet>
        <div className="flex flex-col gap-4 py-5">
            {OtherSkillLanguagesConst.map((otherSkillLanguage, index) => (
                <OtherSkillLanguageItem key={index} image={otherSkillLanguage.image} name={otherSkillLanguage.name} percentage={otherSkillLanguage.percentage}/>
            ))}
        </div>
    </div>;
};

export default OtherSkillLanguages;
