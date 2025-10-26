import React from "react";


const HeadlineHeading: React.FC = async() => {
    return <React.Fragment>
        <h2 className="pt-3 pb-5 leading-12 font-plus-jakarta-sans text-3xl font-bold md:pt-5 md:pb-8 md:leading-15 md:text-5xl">
            Fullstack Software Engineer Specializing in&nbsp;
            <span className="inline-block bg-primary-100 mt-2 px-3 pb-1 rounded-4xl font-semibold text-black rotate-[-3deg]">Scalable</span>&nbsp;
            Web Applications.</h2>
        <p className="text-sm md:text-base">With over 13 years of experience across different programming language and
            proven track
            record in Rust, Python, React, Kotlin, C#, and PHP. I build efficient, maintainable,
            and future-ready software solutions for modern business needs. Optimized and efficient
            are my keywords in developing a system that will transform your imagination into reality.</p>
    </React.Fragment>;
};

export default HeadlineHeading;
