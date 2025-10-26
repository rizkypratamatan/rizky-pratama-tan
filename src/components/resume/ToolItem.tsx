import React from "react";


type Props = {
    image?: string;
    percentage?: number;
    name?: string;
};

const ToolItem: React.FC<Props> = async({image, percentage, name}) => {
    return <div className="flex flex-col gap-2.5 p-5 bg-background-rgba-200 border border-border-100 rounded-2xl">
        <div className="size-18 mx-auto bg-[position:center_38%] bg-[length:40%_40%] bg-no-repeat sm:size-25" style={{backgroundImage: `url('${image}')`}}>
            <svg className="tool-icon" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path style={{strokeDashoffset: (100 - (percentage ?? 0))}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text x="18" y="28">{percentage}%</text>
            </svg>
        </div>
        <h3 className="grow flex flex-col justify-center items-center text-sm text-center md:text-base">{name}</h3>
    </div>;
};

export default ToolItem;
