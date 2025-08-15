import {IconSettingsCode} from "@tabler/icons-react";
import {Link} from "react-router";


export default function IndexComponent() {
    return (
        <>
            <section className="flex flex-col gap-[0.938rem] pt-[2.5rem]">
                <p className="leading-[2.5rem] text-[1.125rem] md:text-[1.5rem]">Hello,
                    I'm <span className="text-primary">Rizky Pratama</span></p>
                <h2 className="text-[1.625rem] font-plus-jakarta-sans font-semibold md:text-[3.25rem]">Fullstack
                    Software Engineer Specializing
                    in <span className="inline-block bg-primary px-[0.75rem] rounded-[2.5rem] text-[1.5rem] font-semibold text-bgd-primary transform-[rotate(-2deg)] md:text-[2.813rem]">Scalable</span> Web
                    Applications.</h2>
                <p className="text-gray dark:text-rgba-white-dark">With over 13 years of experience across different
                    programming language and proven track
                    record in Rust, Python, React, Kotlin, C#, and PHP. I build
                    efficient, maintainable, and future-ready software solutions for modern business needs. Optimized
                    and efficient are my keywords in developing a system that will transform your imagination into
                    reality.</p>
            </section>
            <section className="flex flex-wrap justify-around py-[2.5rem]">
                <h3 className="stats"><span>68</span><span>Completed Projects</span></h3>
                <h3 className="stats"><span>5+</span><span>Programming Languages</span>
                </h3>
                <h3 className="stats"><span>13</span><span>Years of Experience</span>
                </h3>
            </section>
            <section className="pb-[1.875rem]">
                <div className="title-bullet w-[8.125rem] md:w-[8.625rem]">
                    <span><IconSettingsCode size={'1rem'}/></span>
                    <p>Expertise</p>
                </div>
                <h2 className="pt-[0.625rem] pb-[1.875rem] text-[1.438rem] font-semibold md:text-[2.375rem]">What
                    Services I Provide ?</h2>
                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2">
                    <div className="service">
                        <div className="service-top">
                            <div>
                                <picture className="select-none">
                                    <source srcSet="/resources/images/service-1.webp" type="image/webp"/>
                                    <source srcSet="/resources/images/service-1.png" type="image/png"/>
                                    <img src="/resources/images/service-1.png" alt="Frontend Development Icon" draggable={false}/>
                                </picture>
                            </div>
                            <div>
                                <span>52 completed projects</span>
                                <h3>Frontend Development</h3>
                            </div>
                        </div>
                        <p>Creating compelling web frontend with HTML5, CSS3, Tailwind, Javascript, React.
                            Creative looking and smooth transition and animation rich visual content.</p>
                        <Link to="/contact/">Get Started</Link>
                    </div>
                    <div className="service">
                        <div className="service-top">
                            <div>
                                <picture className="select-none">
                                    <source srcSet="/resources/images/service-2.webp" type="image/webp"/>
                                    <source srcSet="/resources/images/service-2.png" type="image/png"/>
                                    <img src="/resources/images/service-2.png" alt="Backend Development Icon" draggable={false}/>
                                </picture>
                            </div>
                            <div>
                                <span>33 completed projects</span>
                                <h3>Backend Development</h3>
                            </div>
                        </div>
                        <p>Rust, Java, Kotlin, C#, PHP proficiency, production of a robust and stable backend system,
                            enhancing search
                            engine visibility and AI engine optimized.</p>
                        <Link to="/contact/">Get Started</Link>
                    </div>
                    <div className="service">
                        <div className="service-top">
                            <div>
                                <picture className="select-none">
                                    <source srcSet="/resources/images/service-3.webp" type="image/webp"/>
                                    <source srcSet="/resources/images/service-3.png" type="image/png"/>
                                    <img src="/resources/images/service-3.png" alt="IOT Development Icon" draggable={false}/>
                                </picture>
                            </div>
                            <div>
                                <span>8 completed projects</span>
                                <h3>IOT Development</h3>
                            </div>
                        </div>
                        <p>Smart manufacturing and smart home development with C++, will optimize your business and
                            activities through synchronized environment</p>
                        <Link to="/contact/">Get Started</Link>
                    </div>
                    <div className="service">
                        <div className="service-top">
                            <div>
                                <picture className="select-none">
                                    <source srcSet="/resources/images/service-4.webp" type="image/webp"/>
                                    <source srcSet="/resources/images/service-4.png" type="image/png"/>
                                    <img src="/resources/images/service-4.png" alt="3D Modeling Icon" draggable={false}/>
                                </picture>
                            </div>
                            <div>
                                <span>2 completed projects</span>
                                <h3>AI System Development</h3>
                            </div>
                        </div>
                        <p>Engineering a robust AI system for predicting and classifying use case into a real world
                            solution.</p>
                        <Link to="/contact/">Get Started</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
