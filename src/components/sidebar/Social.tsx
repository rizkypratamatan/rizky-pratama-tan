import SocialLink from "@/components/sidebar/SocialLink";
import {Socials} from "@/constants/Socials";
import SocialItem from "@/types/SocialItem";


export default async function Social() {
    return <div className="flex justify-center gap-2 px-10 py-3 xs:py-5">
        {Socials.map((social: SocialItem, index: number) =>
            <SocialLink key={index} href={social.href} text={social.text}>
                {social.icon}
            </SocialLink>)}
    </div>;
}
