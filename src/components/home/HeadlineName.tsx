import React from "react";


const HeadlineName: React.FC = async() => {
    return <p className="pt-6 leading-10 text-xl md:pt-10 md:text-2xl">
        Hello, I&#39;m <span className="text-primary-100">{process.env.NEXT_PUBLIC_PROFILE_NAME}</span>
    </p>;
};

export default HeadlineName;
