import Image from "next/image";
import React from "react";


type Props = {
    image: string;
    name: string;
    percentage: number;
};

const OtherSkillLanguageItem: React.FC<Props> = ({image, name, percentage}) => {
    return <div className="flex gap-5 items-center">
        <div className="p-1.5 xs:p-3 bg-background-rgba-300 border border-border-100 rounded-xl">
            <Image className="rounded-lg select-none" src={image} width={34} height={34} alt={`${name} Flag Logo`}/>
        </div>
        <div className="grow flex flex-col gap-1.25">
            <h3 className="text-sm md:text-base">{name}</h3>
            <div className="flex gap-3 md:gap-5 justify-between items-center">
                <div className="basis-30 xs:basis-60 flex justify-between min-w-40">
                    {Array.from({length: 10}).map((_, index: number) => {
                        return <span key={index} className={`${(index + 1) * 10 <= percentage ? 'bg-primary-100' : 'bg-border-100'} size-2.5 rounded-full xs:size-4`}></span>;
                    })}
                </div>
                <p className="text-sm md:text-base">{percentage}%</p>
            </div>
        </div>
    </div>;
};

export default OtherSkillLanguageItem;
