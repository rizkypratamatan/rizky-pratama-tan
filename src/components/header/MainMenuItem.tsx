"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";


type Props = {
    children: React.ReactNode;
    href: string;
    text: string;
};

const MainMenuItem: React.FC<Props> = ({children, href, text}) => {
    const path: string = usePathname();

    return (
        <li className="w-12.5 h-12.5 bg-background-rgba-200 rounded-full">
            <Link className={`${path.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'active' : ''} relative flex justify-center items-center size-full [&:hover>svg]:text-primary-100 [&.active>svg]:text-primary-100 lg:[&:hover>span]:opacity-100`} href={href} aria-label={`${text} Menu`}>
                {children}
                <span className="absolute z-10 left-full top-[calc(50%-0.7815rem)] h-6.25 px-2 bg-primary-100 rounded-xl leading-6.25 text-sm text-text-200 uppercase opacity-0 transition-all duration-300 ease-linear">{text}</span>
            </Link>
        </li>
    );
};

export default MainMenuItem;
