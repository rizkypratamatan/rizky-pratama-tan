import SocialItem from "@/components/sidebar/SocialItem";
import {SocialType} from "@/types/enums/SocialType";
import {IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedinFilled, IconBrandTiktok} from "@tabler/icons-react";
import React from "react";


const Socials: React.FC = async() => {
    return <div className="flex justify-center gap-2 px-10 py-3 xs:py-5">
        <SocialItem href={process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL ?? ''} type={SocialType.Linkedin}>
            <IconBrandLinkedinFilled className="duration-300" size={20}/>
        </SocialItem>
        <SocialItem href={process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL ?? ''} type={SocialType.Github}>
            <IconBrandGithubFilled className="duration-300" size={20}/>
        </SocialItem>
        <SocialItem href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL ?? ''} type={SocialType.Instagram}>
            <IconBrandInstagram className="duration-300" size={20}/>
        </SocialItem>
        <SocialItem href={process.env.NEXT_PUBLIC_SOCIAL_TIKTOK_URL ?? ''} type={SocialType.Tiktok}>
            <IconBrandTiktok className="duration-300" size={20}/>
        </SocialItem>
    </div>;
};

export default Socials;
