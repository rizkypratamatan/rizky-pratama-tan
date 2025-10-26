import EducationCourses from "@/components/resume/EducationCourses";
import EducationFormals from "@/components/resume/EducationFormals";
import React from "react";


const Educations: React.FC = async() => {
    return <section className="flex flex-col gap-7.5 pt-15 md:flex-row lg:flex-col xl:flex-row">
        <EducationCourses/>
        <EducationFormals/>
    </section>;
};

export default Educations;
