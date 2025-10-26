import React from "react";


const ProfileName: React.FC = async() => {
    return <h1 className="leading-13.75 text-2xl font-semibold text-center xs:text-3xl">{process.env.NEXT_PUBLIC_PROFILE_NAME}</h1>;
};

export default ProfileName;
