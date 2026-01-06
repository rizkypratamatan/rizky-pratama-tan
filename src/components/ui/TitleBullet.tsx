import {ReactNode} from "react";


type Props = {
    children: ReactNode;
    className: string;
    title: string;
};


export default async function TitleBullet({children, className, title}: Props) {
    return <div className={`flex gap-2.5 justify-center items-center py-1.5 border border-border-100 rounded-4xl ${className}`}>
        {children}
        <p className="text-sm uppercase md:text-base">{title}</p>
    </div>;
}
