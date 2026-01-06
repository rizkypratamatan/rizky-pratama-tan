import OtherSkillSoftItem from "@/components/resume/OtherSkillSoftItem";
import TitleBullet from "@/components/ui/TitleBullet";
import {OtherSoftSkills} from "@/constants/OtherSoftSkills";
import OtherSoftSkillItem from "@/types/OtherSoftSkillItem";
import {IconList} from "@tabler/icons-react";


export default async function OtherSkillSoft() {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Soft Skills">
            <IconList className="size-4"/>
        </TitleBullet>
        <div className="flex flex-col gap-2.5 py-5">
            {OtherSoftSkills.map((otherSoftSkill: OtherSoftSkillItem, index) =>
                <OtherSkillSoftItem key={index}>{otherSoftSkill.name}</OtherSkillSoftItem>)}
        </div>
    </div>;
}
