import MainMenuItem from "@/components/header/MainMenuItem";
import {MainMenuType} from "@/types/enums/MainMenuType";
import {IconBrandTelegram, IconBuildingBank, IconUserCode} from "@tabler/icons-react";
import React from "react";


const MainMenus: React.FC = async() => {
    return <nav className="gradient-container rounded-none before:rounded-none xs:rounded-4xl before:xs:rounded-4xl">
        <ul className="flex gap-1 justify-around items-center mx-auto py-2.5 overflow-hidden xs:flex-col xs:justify-between xs:overflow-visible">
            <MainMenuItem href="/" type={MainMenuType.About}>
                <IconUserCode className="inline duration-500" size={20}/>
            </MainMenuItem>
            <MainMenuItem href="/resume" type={MainMenuType.Resume}>
                <IconBuildingBank className="inline duration-500" size={20}/>
            </MainMenuItem>
            <MainMenuItem href="/contact" type={MainMenuType.Contact}>
                <IconBrandTelegram className="inline duration-500" size={20}/>
            </MainMenuItem>
        </ul>
    </nav>;
};

export default MainMenus;
