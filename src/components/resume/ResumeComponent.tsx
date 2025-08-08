import {
    IconBarbellFilled,
    IconBooks,
    IconBriefcaseFilled,
    IconCertificate, IconCheck,
    IconChevronRight, IconLanguage, IconList,
    IconSettingsCode,
    IconUsersGroup
} from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";
import {useEffect, useState} from "react";


export default function ResumeComponent() {
    const [emblaCarousel, emblaApi] = useEmblaCarousel({align: 'start'});
    const [emblaSelected, setEmblaSelected] = useState<number>(0);
    const [emblaScrollSnaps, setEmblaScrollSnaps] = useState<number[]>([]);

    const dotClick = (index: number) => {
        if(emblaApi) {
            emblaApi.scrollTo(index);
            setEmblaSelected(index);
        }
    }

    useEffect(() => {
        if(emblaApi) {
            setEmblaScrollSnaps(emblaApi.scrollSnapList());
        }
    }, [emblaApi]);

    return (
        <div className="content bg-gradient md:rounded-tl-none">
            <div className="relative p-0 md:p-[0.625rem]">
                <div className="p-[1.875rem] md:max-h-[38.813rem] md:overflow-y-auto">
                    <section className="flex flex-col gap-[0.938rem] pt-[2.5rem]">
                        <div className="title-bullet w-[8.563rem]">
                            <span><IconBriefcaseFilled size={'1rem'}/></span>
                            <p>Resume</p>
                        </div>
                        <h2 className="pt-[0.625rem] pb-[1.875rem] text-[2.375rem] font-semibold text-white">Work
                            Experience & Education</h2>
                        <div className="embla">
                            <div className="embla-viewport" ref={emblaCarousel}>
                                <div className="embla-container">
                                    <div className="embla-slide experience">
                                        <h3 className="text-primary">2022 - Present</h3>
                                        <div className="experience-line"></div>
                                        <h4 className="text-[1.063rem] font-semibold">Game Developer</h4>
                                        <p className="text-rgba-white-dark">Los Angeles, XYZ Games</p>
                                        <p>Developed several successful video games using Unity 3D, Unreal and Cocos2D.
                                            Designed game features, levels and characters.</p>
                                    </div>
                                    <div className="embla-slide experience">
                                        <h3 className="text-primary">2021 - 2022</h3>
                                        <div className="experience-line"></div>
                                        <h4 className="text-[1.063rem] font-semibold">Game Designer</h4>
                                        <p className="text-rgba-white-dark">New York, ABC Games</p>
                                        <p>Created and designed game levels and characters Developed game features and
                                            functions. Fixed bugs and optimized games.</p>
                                    </div>
                                    <div className="embla-slide experience">
                                        <h3 className="text-primary">2019 - 2021</h3>
                                        <div className="experience-line"></div>
                                        <h4 className="text-[1.063rem] font-semibold">Gameplay Programmer</h4>
                                        <p className="text-rgba-white-dark">Carson, ABC Inc.</p>
                                        <p>Engineered a robust AI system for an open-world action game, enhancing NPC
                                            behaviors that significantly increased player immersion.</p>
                                    </div>
                                    <div className="embla-slide experience">
                                        <h3 className="text-primary">2018 - 2019</h3>
                                        <div className="experience-line"></div>
                                        <h4 className="text-[1.063rem] font-semibold">Senior Gameplay Engineer</h4>
                                        <p className="text-rgba-white-dark">Los Angeles, Studio Wildcard</p>
                                        <p>Collaborated with the art team to integrate graphics techniques that elevated
                                            the
                                            visual fidelity of characters, crowning the studio.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="embla-dots">
                                {emblaScrollSnaps.map((_, index) => (
                                    <button key={index} className={index === emblaSelected ? 'selected' : ''} onClick={() => dotClick(index)}></button>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="flex gap-[1.875rem] pt-[3.75rem]">
                        <div className="resume-column">
                            <div className="title-bullet w-[11.688rem]">
                                <span><IconCertificate size={'1rem'}/></span>
                                <p>Certifications</p>
                            </div>
                            <div className="resume-column-container">
                                <div className="certification">
                                    <div>
                                        <p>2018</p>
                                    </div>
                                    <p className="font-semibold">Unity Certified Programmer</p>
                                    <p className="text-rgba-white-dark">Houghton</p>
                                    <p>Certified Unity Professional, Unity Technologies. Skilled in Unity3D, C#.</p>
                                    <div>
                                        <button>Certificate <IconChevronRight size={'0.875rem'}/></button>
                                    </div>
                                </div>
                                <div className="certification">
                                    <div>
                                        <p>2017</p>
                                    </div>
                                    <p className="font-semibold">Certified Unreal Developer </p>
                                    <p className="text-rgba-white-dark">New York</p>
                                    <p>Certified Unity Professional, Unity Technologies. Skilled in Unity3D, C#.</p>
                                    <div>
                                        <button>Certificate <IconChevronRight size={'0.875rem'}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume-column">
                            <div className="title-bullet w-[9.625rem]">
                                <span><IconBooks size={'1rem'}/></span>
                                <p>Education</p>
                            </div>
                            <div className="resume-column-container">
                                <div className="certification">
                                    <div>
                                        <p>2018</p>
                                    </div>
                                    <p className="font-semibold">Unity Certified Programmer</p>
                                    <p className="text-rgba-white-dark">Houghton</p>
                                    <p>Certified Unity Professional, Unity Technologies. Skilled in Unity3D, C#.</p>
                                    <div>
                                        <button>Learn More <IconChevronRight size={'0.875rem'}/></button>
                                    </div>
                                </div>
                                <div className="certification">
                                    <div>
                                        <p>2018</p>
                                    </div>
                                    <p className="font-semibold">Unity Certified Programmer</p>
                                    <p className="text-rgba-white-dark">Houghton</p>
                                    <p>Certified Unity Professional, Unity Technologies. Skilled in Unity3D, C#.</p>
                                    <div>
                                        <button>Learn More <IconChevronRight size={'0.875rem'}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-[0.938rem] pt-[5.625rem]">
                        <div className="title-bullet w-[10.125rem]">
                            <span><IconBarbellFilled size={'1rem'}/></span>
                            <p>Hard Skills</p>
                        </div>
                        <h2 className="pt-[0.625rem] pb-[1.875rem] text-[2.375rem] font-semibold text-white">Technology
                            Stack</h2>
                        <div className="grid grid-cols-2 gap-[1.875rem]">
                            <div className="technology">
                                <div className="technology-detail">
                                    <div>
                                        <img src="/resources/images/java-240-184x184.png" alt="Java Logo Icon"/>
                                    </div>
                                    <h3>Java</h3>
                                </div>
                                <div className="technology-range">
                                    <div className="w-[95%]"></div>
                                </div>
                                <p>95%</p>
                            </div>
                            <div className="technology">
                                <div className="technology-detail">
                                    <div>
                                        <img src="/resources/images/java-240-184x184.png" alt="Java Logo Icon"/>
                                    </div>
                                    <h3>C++</h3>
                                </div>
                                <div className="technology-range">
                                    <div className="w-[85%]"></div>
                                </div>
                                <p>85%</p>
                            </div>
                            <div className="technology">
                                <div className="technology-detail">
                                    <div>
                                        <img src="/resources/images/java-240-184x184.png" alt="Java Logo Icon"/>
                                    </div>
                                    <h3>C#</h3>
                                </div>
                                <div className="technology-range">
                                    <div className="w-[80%]"></div>
                                </div>
                                <p>80%</p>
                            </div>
                            <div className="technology">
                                <div className="technology-detail">
                                    <div>
                                        <img src="/resources/images/java-240-184x184.png" alt="Java Logo Icon"/>
                                    </div>
                                    <h3>Python</h3>
                                </div>
                                <div className="technology-range">
                                    <div className="w-[75%]"></div>
                                </div>
                                <p>75%</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-[0.938rem] pt-[5.625rem]">
                        <div className="title-bullet w-[10.125rem]">
                            <span><IconSettingsCode size={'1rem'}/></span>
                            <p>Tool Skills</p>
                        </div>
                        <h2 className="pt-[0.625rem] pb-[1.875rem] text-[2.375rem] font-semibold text-white">Tool
                            Stack</h2>
                        <div className="grid grid-cols-4 gap-[1.875rem]">
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 25}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">75%</text>
                                    </svg>
                                </div>
                                <h3>Unity</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 25}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">75%</text>
                                    </svg>
                                </div>
                                <h3>Unreal Engine</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 15}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">85%</text>
                                    </svg>
                                </div>
                                <h3>Godot</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">95%</text>
                                    </svg>
                                </div>
                                <h3>Blender</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 25}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">75%</text>
                                    </svg>
                                </div>
                                <h3>Visual Studio</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 20}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">80%</text>
                                    </svg>
                                </div>
                                <h3>ChatGPT</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">95%</text>
                                    </svg>
                                </div>
                                <h3>Github</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range" style={{backgroundImage: "url('/resources/images/unity-240-3.png')"}}>
                                    <svg className="tool-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="28">95%</text>
                                    </svg>
                                </div>
                                <h3>Trello</h3>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-[0.938rem] pt-[5.625rem]">
                        <h2 className="text-[2.375rem] font-semibold text-white">General Skills</h2>
                        <div className="title-bullet w-[12.375rem] mt-[1.875rem]">
                            <span><IconUsersGroup size={'1rem'}/></span>
                            <p>Communication</p>
                        </div>
                        <div className="grid grid-cols-4 gap-[1.875rem]">
                            <div className="tool">
                                <div className="tool-range">
                                    <svg className="soft-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 10}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="21">90%</text>
                                    </svg>
                                </div>
                                <h3>Leadership</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range">
                                    <svg className="soft-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 25}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="21">75%</text>
                                    </svg>
                                </div>
                                <h3>Critical Thinking</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range">
                                    <svg className="soft-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 15}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="21">85%</text>
                                    </svg>
                                </div>
                                <h3>Mentorship</h3>
                            </div>
                            <div className="tool">
                                <div className="tool-range">
                                    <svg className="soft-skill" viewBox="0 0 36 36">
                                        <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text className="percentage" x="18" y="21">95%</text>
                                    </svg>
                                </div>
                                <h3>Empathy</h3>
                            </div>
                        </div>
                    </section>
                    <section className="flex gap-[1.875rem] pt-[5.625rem] pb-[1.875rem]">
                        <div className="resume-column">
                            <div className="title-bullet w-[9.75rem]">
                                <span><IconLanguage size={'1rem'}/></span>
                                <p>Languages</p>
                            </div>
                            <div className="skill-column-container">
                                <div className="language-item">
                                    <div className="language-image">
                                        <img src="/resources/images/united-kingdom.png" alt="United Kingdom Flag"/>
                                    </div>
                                    <div className="language-text">
                                        <h3>English</h3>
                                        <div className="language-rate">
                                            <div>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-bgd-gray"></span>
                                                <span className="bg-bgd-gray"></span>
                                                <span className="bg-bgd-gray"></span>
                                            </div>
                                            <p>70%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="language-item">
                                    <div className="language-image">
                                        <img src="/resources/images/united-kingdom.png" alt="United Kingdom Flag"/>
                                    </div>
                                    <div className="language-text">
                                        <h3>Bahasa</h3>
                                        <div className="language-rate">
                                            <div>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-primary"></span>
                                                <span className="bg-bgd-gray"></span>
                                            </div>
                                            <p>90%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume-column">
                            <div className="title-bullet w-[9.875rem]">
                                <span><IconList size={'1rem'}/></span>
                                <p>Soft Skills</p>
                            </div>
                            <div className="skill-column-container">
                                <p className="soft-skill-item"><IconCheck size={'1rem'}/> Critical thinking and analytical skills</p>
                                <p className="soft-skill-item"><IconCheck size={'1rem'}/> Strong problem-solving skills</p>
                                <p className="soft-skill-item"><IconCheck size={'1rem'}/> Attention to detail</p>
                                <p className="soft-skill-item"><IconCheck size={'1rem'}/> Creative Problem-Solving</p>
                                <p className="soft-skill-item"><IconCheck size={'1rem'}/> Continuous Learning</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
