import Contact from "@/components/sidebar/Contact";
import ProfileName from "@/components/sidebar/ProfileName";
import ProfilePicture from "@/components/sidebar/ProfilePicture";
import Socials from "@/components/sidebar/Socials";
import TypingTextSidebar from "@/components/sidebar/TypingText";
import React from "react";


const Sidebar: React.FC = async() => {
    return (
        <div className="basis-auto w-full max-w-120 mx-auto bg-background-100 rounded-4xl gradient-container-hidden xs:basis-full-menu xs:max-w-full xs:ml-20 lg:basis-90 lg:ml-0 lg:rounded-tr-none">
            <div className="relative flex flex-col gap-3 xs:gap-4">
                <ProfilePicture/>
                <div className="flex flex-col px-10">
                    <TypingTextSidebar/>
                    <ProfileName/>
                </div>
                <Socials/>
                <Contact/>
            </div>
        </div>
    );
};

export default Sidebar;
