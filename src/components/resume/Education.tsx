import EducationCourse from "@/components/resume/EducationCourse";
import EducationFormal from "@/components/resume/EducationFormal";


export default async function Education() {
    return <section className="flex flex-col gap-7.5 pt-15 md:flex-row lg:flex-col xl:flex-row">
        <EducationCourse/>
        <EducationFormal/>
    </section>;
}
