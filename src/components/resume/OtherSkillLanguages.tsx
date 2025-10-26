import OtherSkillLanguageItem from "@/components/resume/OtherSkillLanguageItem";
import TitleBullet from "@/components/TitleBullet";
import {Language} from "@/types/enums/Language";
import {IconLanguage} from "@tabler/icons-react";
import React from "react";


const OtherSkillLanguages: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Languages">
            <IconLanguage size={16}/>
        </TitleBullet>
        <div className="flex flex-col gap-4 py-5">
            <OtherSkillLanguageItem image="/images/english-logo.png" name={Language.English} percentage={70}/>
            <OtherSkillLanguageItem image="/images/bahasa-logo.png" name={Language.Bahasa} percentage={90}/>
        </div>
    </div>;
};

export default OtherSkillLanguages;
