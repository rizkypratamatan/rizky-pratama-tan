import MainMenuItem from "@/components/header/MainMenuItem";
import MainMenusConst from "@/constants/MainMenus";
import React from "react";


const MainMenus: React.FC = async() => {
    return <nav className="gradient-container rounded-none before:rounded-none xs:rounded-4xl before:xs:rounded-4xl">
        <ul className="flex gap-1 justify-around items-center mx-auto py-2.5 overflow-hidden xs:flex-col xs:justify-between xs:overflow-visible">
            {MainMenusConst.map((menu, index) => (
                <MainMenuItem key={index} href={menu.href} text={menu.text}>
                    {menu.icon}
                </MainMenuItem>
            ))}
        </ul>
    </nav>;
};

export default MainMenus;
