import React from "react";


type Props = {
    count?: string;
    name?: string;
};

const AchievementItem: React.FC<Props> = async({count, name}) => {
    return <h3 className="basis-30 flex gap-2.5 items-center md:gap-5">
        <span className="text-4xl md:text-6xl">{count}</span>
        <span className="text-sm md:text-base">{name}</span>
    </h3>;
};

export default AchievementItem;
