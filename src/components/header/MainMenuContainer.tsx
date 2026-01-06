import MainMenu from "@/components/header/MainMenu";
import {MainMenus} from "@/constants/MainMenus";
import MainMenuItem from "@/types/MainMenuItem";


export default async function MainMenuContainer() {
    return <nav className="gradient-container rounded-none before:rounded-none xs:rounded-4xl before:xs:rounded-4xl">
        <ul className="flex gap-1 justify-around items-center mx-auto py-2.5 overflow-hidden xs:flex-col xs:justify-between xs:overflow-visible">
            {MainMenus.map((menu: MainMenuItem, index: number) =>
                <MainMenu key={index} href={menu.href} text={menu.text}>{menu.icon}</MainMenu>)}
        </ul>
    </nav>;
}
