import SocialItem from "@/components/sidebar/SocialItem";
import SocialsConst from "@/constants/Socials";
import React from "react";


const Socials: React.FC = async() => {
    return <div className="flex justify-center gap-2 px-10 py-3 xs:py-5">
        {SocialsConst.map((social, index) => (
            <SocialItem key={index} href={social.href} text={social.text}>
                {social.icon}
            </SocialItem>
        ))}
    </div>;
};

export default Socials;
