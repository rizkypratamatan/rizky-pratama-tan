import Educations from "@/components/resume/Educations";
import Experiences from "@/components/resume/Experiences";
import OtherSkills from "@/components/resume/OtherSkills";
import SoftSkills from "@/components/resume/SoftSkills";
import Technologies from "@/components/resume/Technologies";
import Tools from "@/components/resume/Tools";
import {Metadata} from "next";
import React, {Fragment} from "react";


export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? '/'),
    title: `Resume - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description: `Resume of ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.`,
    keywords: ['resume', 'fullstack developer', 'web development', 'frontend developer', 'backend developer', 'reactjs', 'javascript', 'python developer', 'rust developer', 'django developer', 'java developer', 'tailwindcss', 'web design', 'software engineer', 'web app development', 'mobile app development', 'scalable app'],
    alternates: {
        canonical: '/resume'
    },
    openGraph: {
        title: `Resume - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
        description: `Resume of ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.`,
        url: '/resume',
        siteName: process.env.NEXT_PUBLIC_WEBSITE_NAME,
        images: [
            {
                url: '/images/avatars/rizky-pratama-profile-picture.png',
                width: 1200,
                height: 630,
                alt: 'Rizky Pratama Tan'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: `Resume - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
        description: 'Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.',
        images: ['/images/avatars/rizky-pratama-profile-picture.png']
    }
};

const Resume: React.FC = async() => {
    return <Fragment>
        <Experiences/>
        <Educations/>
        <Technologies/>
        <Tools/>
        <SoftSkills/>
        <OtherSkills/>
    </Fragment>;
};

export default Resume;
