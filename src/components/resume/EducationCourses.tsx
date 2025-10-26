import EducationItem from "@/components/resume/EducationItem";
import TitleBullet from "@/components/TitleBullet";
import {IconCertificate} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";


const EducationCourses: React.FC = async() => {
    return <div className="basis-1/2 flex flex-col gap-5">
        <TitleBullet className="w-45 md:w-50" title="Certifications">
            <IconCertificate size={16}/>
        </TitleBullet>
        <div className="resume">
            <EducationItem year="2025" certificate="Certified Ethical Hacker" place="EC-Council" description="Certified Ethical Hacker from EC-Council. Skilled in Pentesting." buttonText="Certificate">
                <Image src="/images/ecc-ceh-certificate.png" width={600} height={600} alt="Certified Ethical Hacker Certificate"/>
            </EducationItem>
            <EducationItem year="2025" certificate="MTCTCE" place="Mikrotik" description="Certified MTCTCE, Mikrotik. Skilled in Mikrotik Traffic Control." buttonText="Certificate">
                <Image src="/images/mtctce-certificate.png" width={600} height={600} alt="MTCTCE Certificate"/>
            </EducationItem>
            <EducationItem year="2024" certificate="MTCRE" place="Mikrotik" description="Certified MTCRE, Mikrotik. Skilled in Mikrotik Routing Engineering." buttonText="Certificate">
                <Image src="/images/mtcre-certificate.png" width={600} height={600} alt="MTCRE Certificate"/>
            </EducationItem>
        </div>
    </div>;
};

export default EducationCourses;
