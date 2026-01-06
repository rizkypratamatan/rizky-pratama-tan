import {IconCheck} from "@tabler/icons-react";
import {ReactNode} from "react";


type Props = {
    children: ReactNode;
};


export default async function OtherSkillSoftItem({children}: Props) {
    return <p className="flex gap-3 items-center">
        <span className="text-primary-100"><IconCheck className="size-4"/></span>
        <span className="text-sm md:text-base">{children}</span>
    </p>;
}
