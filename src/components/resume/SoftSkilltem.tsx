import React from "react";


type Props = {
    percentage?: number;
    name?: string;
};

const SoftSkilltem: React.FC<Props> = async({percentage, name}) => {
    return <div className="flex flex-col gap-2.5 p-5 bg-background-rgba-200 border border-border-100 rounded-2xl">
        <div className="size-18 mx-auto sm:size-25">
            <svg className="soft-skill-icon" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path style={{strokeDashoffset: (100 - (percentage ?? 0))}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text x="18" y="21">{percentage}%</text>
            </svg>
        </div>
        <h3 className="grow flex flex-col justify-center items-center text-center text-sm md:text-base">{name}</h3>
    </div>;
};

export default SoftSkilltem;
