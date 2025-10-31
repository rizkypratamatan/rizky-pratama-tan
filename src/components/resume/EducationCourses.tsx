import EducationItem from "@/components/resume/EducationItem";
import TitleBullet from "@/components/TitleBullet";
import EducationCoursesConst from "@/constants/EducationCourses";
import {IconCertificate} from "@tabler/icons-react";
import React from "react";


const EducationCourses: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-45 md:w-50" title="Certifications">
            <IconCertificate className="size-4"/>
        </TitleBullet>
        <div className="resume">
            {EducationCoursesConst.map((course, index) => (
                <EducationItem key={index} year={course.year} certificate={course.certificate} place={course.place} description={course.description} buttonText={course.buttonText}>
                    {course.image}
                </EducationItem>
            ))}
        </div>
    </div>;
};

export default EducationCourses;
