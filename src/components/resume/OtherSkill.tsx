import OtherSkillLanguage from "@/components/resume/OtherSkillLanguage";
import OtherSkillSoft from "@/components/resume/OtherSkillSoft";


export default async function OtherSkill() {
    return <section className="flex flex-col gap-7.5 pt-15 md:flex-row lg:flex-col xl:flex-row">
        <OtherSkillLanguage/>
        <OtherSkillSoft/>
    </section>;
}
