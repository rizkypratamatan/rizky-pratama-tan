"use client";

import Button from "@/components/ui/Button";
import {useAppContext} from "@/providers/clients/ContextProvider";
import {ContextData} from "@/types/interfaces/ContextData";
import {IconMoon, IconSun} from "@tabler/icons-react";
import React from "react";


const DarkToggle: React.FC = () => {
    const context: ContextData | undefined = useAppContext();

    const darkToggle = () => {
        const dark: boolean = !context?.dark;
        context?.setDark(dark);

        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    };

    return <div className="h-15.5 pr-2.5 bg-background-100 rounded-4xl gradient-container-hidden before:hidden xs:pr-0 before:xs:block">
        <Button className="relative flex justify-center items-center w-full h-full [&:hover>svg]:text-primary-100" aria-label="Dark Toggle Button" onClick={darkToggle}>
            {context?.dark ? <IconSun className="duration-300" size={22}/> :
                <IconMoon className="duration-300" size={22}/>}
        </Button>
    </div>;
};

export default DarkToggle;
