import Hamburger from "@/components/header/Hamburger";


export default async function HamburgerContainer() {
    return <div className="h-15.5 pr-2.5 bg-background-100 rounded-4xl gradient-container-hidden before:hidden xs:pr-0 before:xs:block">
        <Hamburger/>
    </div>;
}
