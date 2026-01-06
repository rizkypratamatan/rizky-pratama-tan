import SoftSkilltem from "@/components/resume/SoftSkillItem";
import TitleBullet from "@/components/ui/TitleBullet";
import TitleHeading from "@/components/ui/TitleHeading";
import {SoftSkills} from "@/constants/SoftSkills";
import SoftSkillItemType from "@/types/SoftSkillItem";
import {IconUsersGroup} from "@tabler/icons-react";


export default async function SoftSkill() {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleHeading>General Skills</TitleHeading>
        <TitleBullet className="w-53" title="Communication">
            <IconUsersGroup className="size-4"/>
        </TitleBullet>
        <div className="grid grid-cols-2 gap-7.5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {SoftSkills.map((skill: SoftSkillItemType, index: number) =>
                <SoftSkilltem key={index} percentage={skill.percentage} name={skill.name}/>)}
        </div>
    </section>;
}
