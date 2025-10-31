import {SocialItem} from "@/types/interfaces/SocialItem";
import {IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedinFilled, IconBrandTiktok} from "@tabler/icons-react";
import React from "react";


const Socials: SocialItem[] = [
    {
        href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL ?? '',
        icon: <IconBrandLinkedinFilled className="size-5 duration-300"/>,
        text: 'Linkedin'
    },
    {
        href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL ?? '',
        icon: <IconBrandGithubFilled className="size-5 duration-300"/>,
        text: 'Github'
    },
    {
        href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL ?? '',
        icon: <IconBrandInstagram className="size-5 duration-300"/>,
        text: 'Instagram'
    },
    {
        href: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK_URL ?? '',
        icon: <IconBrandTiktok className="size-5 duration-300"/>,
        text: 'Tiktok'
    }
];

export default Socials;
