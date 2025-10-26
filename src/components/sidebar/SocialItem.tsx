import useTransform from "@/hooks/useTransform";
import {SocialType} from "@/types/enums/SocialType";
import Link from "next/link";
import React from "react";


type Props = {
    children?: React.ReactNode;
    href: string;
    type: SocialType;
};

const SocialItem: React.FC<Props> = ({children, href, type}) => {
    return <Link className="basis-10 flex justify-center items-center h-10 border border-border-100 rounded-2xl [&:hover>svg]:text-primary-100" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${process.env.NEXT_PUBLIC_PROFILE_NAME} ${useTransform(type)}`}>
        {children}
    </Link>
};

export default SocialItem;
