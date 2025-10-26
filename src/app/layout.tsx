import ServerProviders from "@/providers/servers";
import {Metadata} from "next";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";


const poppins: NextFontWithVariable = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap'
});

const plusJakartaSans: NextFontWithVariable = localFont({
    variable: '--font-plus-jakarta-sans',
    src: [
        {
            path: '../../public/fonts/plus-jakarta-sans.woff2',
            weight: '600',
            style: 'normal'
        }
    ],
    display: 'swap'
});

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

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return <html lang="en" data-theme="dark">
    <body className={`${poppins.variable} ${plusJakartaSans.variable} antialiased`}>
    <ServerProviders>{children}</ServerProviders>
    </body>
    </html>;
}
