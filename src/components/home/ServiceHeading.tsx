import {ReactNode} from "react";


type Props = {
    children: ReactNode;
    description: string;
    heading: string;
};


export default async function ServiceHeading({children, description, heading}: Props) {
    return <div className="flex gap-7.5 items-center">
        {children}
        <div>
            <span className="text-sm text-text-300 md:text-base">{description}</span>
            <h3 className="text-sm md:text-base">{heading}</h3>
        </div>
    </div>;
}
