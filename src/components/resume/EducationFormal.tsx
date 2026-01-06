import EducationItem from "@/components/resume/EducationItem";
import EducationItemMore from "@/components/resume/EducationItemMore";
import TitleBullet from "@/components/ui/TitleBullet";
import {EducationFormals} from "@/constants/EducationFormals";
import EducationItemType from "@/types/EducationItem";
import {IconBooks} from "@tabler/icons-react";


export default async function EducationFormal() {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-38 md:w-43" title="Education">
            <IconBooks className="size-4"/>
        </TitleBullet>
        <div className="resume">
            {EducationFormals.map((formal: EducationItemType, index: number) =>
                <EducationItem key={index} year={formal.year} certificate={formal.certificate} place={formal.place} description={formal.description} button={formal.button}>
                    <EducationItemMore certificate={formal.certificate} place={formal.place} description={formal.description}/>
                </EducationItem>)}
        </div>
    </div>;
}
