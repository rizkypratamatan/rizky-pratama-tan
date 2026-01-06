import EducationItem from "@/components/resume/EducationItem";
import TitleBullet from "@/components/ui/TitleBullet";
import {EducationCourses} from "@/constants/EducationCourses";
import EducationItemType from "@/types/EducationItem";
import {IconCertificate} from "@tabler/icons-react";


export default async function EducationCourse() {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-45 md:w-50" title="Certifications">
            <IconCertificate className="size-4"/>
        </TitleBullet>
        <div className="resume">
            {EducationCourses.map((course: EducationItemType, index: number) =>
                <EducationItem key={index} year={course.year} certificate={course.certificate} place={course.place} description={course.description} button={course.button}>
                    {course.image}
                </EducationItem>)}
        </div>
    </div>;
}
