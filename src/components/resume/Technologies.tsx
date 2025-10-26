import TechnologyItem from "@/components/resume/TechnologyItem";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import {IconBarbellFilled} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";


const Technologies: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-38 md:w-43" title="Hard Skills">
            <IconBarbellFilled size={16}/>
        </TitleBullet>
        <TitleHeading>Technology Stack</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
            <TechnologyItem stack="Rust" percentage={95}>
                <Image src="/images/rust-logo.png" width={40} height={40} alt="Rust Logo"/>
            </TechnologyItem>
            <TechnologyItem stack="Python" percentage={95}>
                <Image src="/images/python-logo.png" width={40} height={40} alt="Python Logo"/>
            </TechnologyItem>
            <TechnologyItem stack="Javascript" percentage={95}>
                <Image src="/images/javascript-logo.png" width={40} height={40} alt="Javascript Logo"/>
            </TechnologyItem>
            <TechnologyItem stack="Java" percentage={85}>
                <Image src="/images/java-logo.png" width={40} height={40} alt="Java Logo"/>
            </TechnologyItem>
            <TechnologyItem stack="C++" percentage={75}>
                <Image src="/images/c-plus-plus-logo.png" width={40} height={40} alt="C++ Logo"/>
            </TechnologyItem>
            <TechnologyItem stack="C#" percentage={75}>
                <Image src="/images/c-sharp-logo.png" width={40} height={40} alt="C# Logo"/>
            </TechnologyItem>
            <TechnologyItem stack="Kotlin" percentage={70}>
                <Image src="/images/kotlin-logo.png" width={40} height={40} alt="Kotlin Logo"/>
            </TechnologyItem>
        </div>
    </section>;
};

export default Technologies;
