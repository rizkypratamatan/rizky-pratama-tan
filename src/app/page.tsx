import Achievements from "@/components/home/Achievements";
import Headline from "@/components/home/Headline";
import Services from "@/components/home/Services";
import {Metadata} from "next";
import React, {Fragment} from "react";


export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? '/'),
    title: process.env.NEXT_PUBLIC_WEBSITE_NAME,
    description: 'Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.',
    keywords: ['fullstack developer', 'web development', 'frontend developer', 'backend developer', 'reactjs', 'javascript', 'python developer', 'rust developer', 'django developer', 'java developer', 'tailwindcss', 'web design', 'software engineer', 'web app development', 'mobile app development', 'scalable app'],
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: process.env.NEXT_PUBLIC_WEBSITE_NAME,
        description: 'Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.',
        url: '/',
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
        title: process.env.NEXT_PUBLIC_WEBSITE_NAME,
        description: 'Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.',
        images: ['/images/avatars/rizky-pratama-profile-picture.png']
    }
};

const Home: React.FC = async() => {
    return <Fragment>
        <Headline/>
        <Achievements/>
        <Services/>
    </Fragment>;
};

export default Home;
