import React from "react";


type Props = {
    certificate: string;
    place: string;
    description: string;
};

const EducationItemLearnMore: React.FC<Props> = ({certificate, place, description}) => {
    return <div className="flex flex-col gap-3 p-7.5 bg-background-100 rounded-lg">
        <p className="font-bold">{certificate}</p>
        <p className="font-semibold">{place}</p>
        <p>{description}</p>
    </div>;
};

export default EducationItemLearnMore;
