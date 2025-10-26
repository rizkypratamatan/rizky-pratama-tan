import DarkToggle from "@/components/header/DarkToggle";
import HamburgerMenu from "@/components/header/HamburgerMenu";
import MainMenus from "@/components/header/MainMenus";
import TypingText from "@/components/header/TypingText";
import ClientProviders from "@/providers/clients";
import React from "react";


const Header: React.FC = async() => {
    return <header className="flex flex-col xs:basis-16.5 xs:fixed xs:w-16.5 xs:gap-2 xs:mt-4 lg:static">
        <div className="flex flex-row-reverse gap-2 bg-background-100 xs:flex-col xs:bg-transparent">
            <HamburgerMenu/>
            <ClientProviders>
                <DarkToggle/>
            </ClientProviders>
            <TypingText/>
        </div>
        <MainMenus/>
    </header>;
};

export default Header;
