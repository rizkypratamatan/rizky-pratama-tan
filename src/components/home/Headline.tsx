import HeadlineHeading from "@/components/home/HeadlineHeading";
import HeadlineName from "@/components/home/HeadlineName";
import React from "react";


const Headline: React.FC = async() => {
    return <section className="flex flex-col gap-4">
        <HeadlineName/>
        <HeadlineHeading/>
    </section>;
};

export default Headline;
