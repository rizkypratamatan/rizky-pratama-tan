import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactMaps from "@/components/contact/ContactMaps";
import ClientProviders from "@/providers/clients";
import {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? '/'),
    title: `Contact - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description: `Contact of ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.`,
    keywords: ['resume', 'fullstack developer', 'web development', 'frontend developer', 'backend developer', 'reactjs', 'javascript', 'python developer', 'rust developer', 'django developer', 'java developer', 'tailwindcss', 'web design', 'software engineer', 'web app development', 'mobile app development', 'scalable app'],
    alternates: {
        canonical: '/contact'
    },
    openGraph: {
        title: `Contact - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
        description: `Contact of ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.`,
        url: '/contact',
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
        title: `Contact - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
        description: 'Fullstack software engineer specializing in scalable web applications with 13 years of experience across different programming language and proven track record in Rust, Python, React, Kotlin, C#, and PHP.',
        images: ['/images/avatars/rizky-pratama-profile-picture.png']
    }
};

const Contact: React.FC = async() => {
    return <React.Fragment>
        <ContactDetails/>
        <ContactMaps/>
        <ClientProviders>
            <ContactForm/>
        </ClientProviders>
    </React.Fragment>;
};

export default Contact;
