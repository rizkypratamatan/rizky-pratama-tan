import OtherSkillLanguageItem from "@/components/resume/OtherSkillLanguageItem";
import TitleBullet from "@/components/ui/TitleBullet";
import {LanguageSkills} from "@/constants/LanguageSkills";
import LanguageSkillItem from "@/types/LanguageSkillItem";
import {IconLanguage} from "@tabler/icons-react";


export default async function OtherSkillLanguage() {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Languages">
            <IconLanguage className="size-4"/>
        </TitleBullet>
        <div className="flex flex-col gap-4 py-5">
            {LanguageSkills.map((languageSkill: LanguageSkillItem, index: number) =>
                <OtherSkillLanguageItem key={index} image={languageSkill.image} name={languageSkill.name} percentage={languageSkill.percentage}/>)}
        </div>
    </div>;
}
