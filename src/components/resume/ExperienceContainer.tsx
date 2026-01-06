import Experience from "@/components/resume/Experience";
import TitleBullet from "@/components/ui/TitleBullet";
import TitleHeading from "@/components/ui/TitleHeading";
import {IconBriefcase} from "@tabler/icons-react";


export default async function ExperienceContainer() {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-40" title="Resume">
            <IconBriefcase className="size-4"/>
        </TitleBullet>
        <TitleHeading>Work Experience & Education</TitleHeading>
        <Experience/>
    </section>;
}
