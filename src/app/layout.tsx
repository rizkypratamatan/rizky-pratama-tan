import ServerProviders from "@/providers/servers";
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

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return <html lang="en" data-theme="dark">
    <body className={`${poppins.variable} ${plusJakartaSans.variable} antialiased`}>
    <ServerProviders>{children}</ServerProviders>
    </body>
    </html>;
}
