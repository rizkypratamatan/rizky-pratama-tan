import Education from "@/components/resume/Education";
import ExperienceContainer from "@/components/resume/ExperienceContainer";
import OtherSkill from "@/components/resume/OtherSkill";
import SoftSkill from "@/components/resume/SoftSkill";
import Technology from "@/components/resume/Technology";
import Tool from "@/components/resume/Tool";
import {Metadata} from "next";
import {Fragment} from "react";


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


export default async function Resume() {
    return <Fragment>
        <ExperienceContainer/>
        <Education/>
        <Technology/>
        <Tool/>
        <SoftSkill/>
        <OtherSkill/>
    </Fragment>;
}
