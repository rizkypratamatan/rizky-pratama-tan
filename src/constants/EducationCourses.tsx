import EducationItem from "@/types/EducationItem";
import Image from "next/image";


export const EducationCourses: EducationItem[] = [
    {
        button: 'Certificate',
        certificate: 'Certified Ethical Hacker',
        description: 'Certified Ethical Hacker from EC-Council. Skilled in Pentesting.',
        image:
            <Image src="/images/ecc-ceh-certificate.png" width={600} height={600} alt="Certified Ethical Hacker Certificate"/>,
        place: 'EC-Council',
        year: '2025'
    },
    {
        button: 'Certificate',
        certificate: 'MTCTCE',
        description: 'Certified MTCTCE, Mikrotik. Skilled in Mikrotik Traffic Control.',
        image: <Image src="/images/mtctce-certificate.png" width={600} height={600} alt="MTCTCE Certificate"/>,
        place: 'Mikrotik',
        year: '2025'
    },
    {
        button: 'Certificate',
        certificate: 'MTCRE',
        description: 'Certified MTCRE, Mikrotik. Skilled in Mikrotik Routing Engineering.',
        image: <Image src="/images/mtcre-certificate.png" width={600} height={600} alt="MTCRE Certificate"/>,
        place: 'Mikrotik',
        year: '2024'
    }
];
