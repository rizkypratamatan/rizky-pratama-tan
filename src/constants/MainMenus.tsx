import MainMenuItem from "@/types/MainMenuItem";
import {IconBrandTelegram, IconBuildingBank, IconUserCode} from "@tabler/icons-react";


export const MainMenus: MainMenuItem[] = [
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
