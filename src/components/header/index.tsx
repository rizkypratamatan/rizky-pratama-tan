import DarkToggleContainer from "@/components/header/DarkToggleContainer";
import HamburgerContainer from "@/components/header/HamburgerContainer";
import MainMenuContainer from "@/components/header/MainMenuContainer";
import TypingTextContainer from "@/components/header/TypingTextContainer";


export default async function Header() {
    return <header className="flex flex-col xs:basis-16.5 xs:fixed xs:w-16.5 xs:gap-2 xs:mt-4 lg:static">
        <div className="flex flex-row-reverse gap-2 bg-background-100 xs:flex-col xs:bg-transparent">
            <HamburgerContainer/>
            <DarkToggleContainer/>
            <TypingTextContainer/>
        </div>
        <MainMenuContainer/>
    </header>;
}
