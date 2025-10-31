import {MainMenuItem} from "@/types/interfaces/MainMenuItem";
import {IconBrandTelegram, IconBuildingBank, IconUserCode} from "@tabler/icons-react";
import React from "react";


const MainMenus: MainMenuItem[] = [
    {
        href: '/',
        icon: <IconUserCode className="inline size-5 duration-500"/>,
        text: 'About'
    },
    {
        href: '/resume',
        icon: <IconBuildingBank className="inline size-5 duration-500"/>,
        text: 'Resume'
    },
    {
        href: '/contact',
        icon: <IconBrandTelegram className="inline size-5 duration-500"/>,
        text: 'Contact'
    }
];

export default MainMenus;
