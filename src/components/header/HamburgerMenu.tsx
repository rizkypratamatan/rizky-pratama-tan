import Button from "@/components/ui/Button";
import React from "react";


const HamburgerMenu: React.FC = async() => {
    return <div className="h-15.5 pr-2.5 bg-background-100 rounded-4xl gradient-container-hidden before:hidden xs:pr-0 before:xs:block">
        <Button className="hamburger" aria-label="Hamburger Menu">
            <span></span>
        </Button>
    </div>;
};

export default HamburgerMenu;
