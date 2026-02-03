import Providers from "@/providers";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import {Poppins} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import {ReactNode} from "react";


const poppins: NextFontWithVariable = Poppins({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '500', '600', '700']
});

const plusJakartaSans: NextFontWithVariable = localFont({
    display: 'swap',
    src: [
        {
            path: '../../public/fonts/plus-jakarta-sans.woff2',
            weight: '600',
            style: 'normal'
        }
    ],
    variable: '--font-plus-jakarta-sans'
});


export default async function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return <html lang="en" data-theme="dark">
    <body className={`${poppins.variable} ${plusJakartaSans.variable} antialiased`}>
    <Providers>{children}</Providers>
    </body>
    </html>;
}
