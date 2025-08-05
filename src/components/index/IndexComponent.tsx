import {IconSettingsCode} from "@tabler/icons-react";


export default function IndexComponent() {
    return (
        <div className="content bg-gradient">
            <div className="relative p-[0.625rem]">
                <div className="max-h-[38.813rem] p-[1.875rem] overflow-y-auto">
                    <section className="flex flex-col gap-[0.938rem] pt-[2.5rem]">
                        <p className="leading-[2.5rem] text-[1.5rem] text-white">Hello, I'm <span>Rizky Pratama</span></p>
                        <h2 className="text-[3.25rem] text-white font-plus-jakarta-sans font-semibold">Unity Game Developer
                            and <span className="inline-block bg-primary px-[0.75rem] rounded-[2.5rem] text-[2.813rem] font-semibold transform-[rotate(-2deg)]">3D Artist</span> Based
                            in California, Los Angeles.</h2>
                        <p className="">With over 6 years of professional experience in AAA game development, I have a
                            proven track record in Unity, C++ proficiency, and have led the production of a mobile games. My
                            leadership in cross-functional teams has significantly contributed to enhancing user
                            engagement.</p>
                    </section>
                    <section className="flex justify-around py-[2.5rem]">
                        <h3 className="stats"><span className="text-white">96</span><span>Completed Projects</span></h3>
                        <h3 className="stats"><span className="text-white">5+</span><span>Programming Languages</span></h3>
                        <h3 className="stats"><span className="text-white">10</span><span>Years of Experience</span></h3>
                    </section>
                    <section className="pb-[1.875rem]">
                        <div className="title-bullet w-[8.625rem]">
                            <span><IconSettingsCode size={'1rem'}/></span>
                            <p>Services</p>
                        </div>
                        <h2 className="pt-[0.625rem] pb-[1.875rem] text-[2.375rem] font-semibold text-white">What Services I Provide ?</h2>
                        <div className="grid grid-cols-2 gap-[1.875rem]">
                            <div className="service">
                                <div className="service-top">
                                    <div>
                                        <img src="/resources/images/service-1.png" alt="3D Modeling Icon" loading="lazy"/>
                                    </div>
                                    <div>
                                        <span>2 Developers</span>
                                        <h3>3D Modeling</h3>
                                    </div>
                                </div>
                                <p>Creating compelling visual content, transitioning creative direction to the realm of video game artistry, 3D modeling and animation.</p>
                                <a href="#">Get Started</a>
                            </div>
                            <div className="service">
                                <div className="service-top">
                                    <div>
                                        <img src="/resources/images/service-2.png" alt="3D Modeling Icon" loading="lazy"/>
                                    </div>
                                    <div>
                                        <span>5 Developers</span>
                                        <h3>Game Development</h3>
                                    </div>
                                </div>
                                <p>Unity, Unreal Engine 4, C++ proficiency, production of a top-charting mobile game, enhancing user engagement and retention.</p>
                                <a href="#">Get Started</a>
                            </div>
                            <div className="service">
                                <div className="service-top">
                                    <div>
                                        <img src="/resources/images/service-3.png" alt="3D Modeling Icon" loading="lazy"/>
                                    </div>
                                    <div>
                                        <span>3 Developers</span>
                                        <h3>Code Optimization</h3>
                                    </div>
                                </div>
                                <p>Optimizing code for smooth gameplay across multiple Android and iOS devices, successfully achieving 95% crash-free sessions.</p>
                                <a href="#">Get Started</a>
                            </div>
                            <div className="service">
                                <div className="service-top">
                                    <div>
                                        <img src="/resources/images/service-4.png" alt="3D Modeling Icon" loading="lazy"/>
                                    </div>
                                    <div>
                                        <span>4 Developers</span>
                                        <h3>AI System</h3>
                                    </div>
                                </div>
                                <p>Engineering a robust AI system for an open-world action game, enhancing NPC behaviors that significantly increased player immersion.</p>
                                <a href="#">Get Started</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
