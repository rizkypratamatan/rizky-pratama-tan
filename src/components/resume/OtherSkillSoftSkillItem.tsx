import {IconCheck} from "@tabler/icons-react";
import React from "react";


type Props = {
    children?: React.ReactNode;
};

const OtherSkillSoftSkillItem: React.FC<Props> = async({children}) => {
    return <p className="flex gap-3 items-center">
        <span className="text-primary-100"><IconCheck size={16}/></span>
        <span className="text-sm md:text-base">{children}</span>
    </p>;
};

export default OtherSkillSoftSkillItem;
