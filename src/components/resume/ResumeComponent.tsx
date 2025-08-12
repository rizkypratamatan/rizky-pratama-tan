import {
    IconBarbellFilled,
    IconBooks,
    IconBriefcaseFilled,
    IconCertificate,
    IconCheck,
    IconChevronRight,
    IconLanguage,
    IconList,
    IconSettingsCode,
    IconUsersGroup
} from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";
import {useCallback, useEffect, useState} from "react";


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

    const onSelect = useCallback((emblaApi: any) => {
        setEmblaSelected(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if(emblaApi) {
            setEmblaScrollSnaps(emblaApi.scrollSnapList());
            emblaApi.on('select', onSelect);
        }
    }, [emblaApi, onSelect]);

    return (
        <>
            <section className="flex flex-col gap-[0.938rem] pt-[2.5rem]">
                <div className="title-bullet w-[7.5rem] md:w-[8.563rem]">
                    <span><IconBriefcaseFilled size={'1rem'}/></span>
                    <p>Resume</p>
                </div>
                <h2 className="pt-[0.625rem] pb-[1.875rem] text-[1.438rem] font-semibold md:text-[2.375rem]">Work
                    Experience & Education</h2>
                <div className="embla">
                    <div className="embla-viewport" ref={emblaCarousel}>
                        <div className="embla-container">
                            <div className="embla-slide experience">
                                <h3 className="text-primary">2022 - Present</h3>
                                <div className="experience-line"></div>
                                <h4 className="text-[1.063rem] font-semibold">R&D</h4>
                                <p className="text-rgba-black-dark dark:text-rgba-white-dark">Jakarta Utara, PT Asia
                                    Multidana</p>
                                <p>Responsible for creating software and hardware improvements, as well as internal
                                    software development.</p>
                            </div>
                            <div className="embla-slide experience">
                                <h3 className="text-primary">2019 - 2022</h3>
                                <div className="experience-line"></div>
                                <h4 className="text-[1.063rem] font-semibold">Software Engineer</h4>
                                <p className="text-rgba-white-dark">Jakarta Utara, PT Asia Multidana</p>
                                <p>Responsible for developing software with HTML5, CSS3, Javascript, PHP, Java,
                                    Javascript, React, MySQL,
                                    MongoDB.</p>
                            </div>
                            <div className="embla-slide experience">
                                <h3 className="text-primary">2016 - 2019</h3>
                                <div className="experience-line"></div>
                                <h4 className="text-[1.063rem] font-semibold">Software Engineer</h4>
                                <p className="text-rgba-white-dark">Kuala Lumpur, One Solution Soft Sdn Bhd</p>
                                <p>Responsible for developing software with HTML5, CSS3, Javascript, C# .Net and SQL
                                    Server.</p>
                            </div>
                            <div className="embla-slide experience">
                                <h3 className="text-primary">2011 - 2016</h3>
                                <div className="experience-line"></div>
                                <h4 className="text-[1.063rem] font-semibold">Software Engineer</h4>
                                <p className="text-rgba-white-dark">Bandung, PT Bestindo Putra Mandiri</p>
                                <p>Responsible for developing software with HTML5, CSS3, Javascript, PHP and MySQL.</p>
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
            <section className="flex flex-col gap-[1.875rem] pt-[3.75rem] md:flex-row">
                <div className="resume-column">
                    <div className="title-bullet w-[11.688rem]">
                        <span><IconCertificate size={'1rem'}/></span>
                        <p>Certifications</p>
                    </div>
                    <div className="resume-column-container">
                        <div className="certification">
                            <div>
                                <p>2025</p>
                            </div>
                            <p className="font-semibold">Certified Ethical Hacker</p>
                            <p className="text-gray-light">EC-Council</p>
                            <p>Certified Ethical Hacker from EC-Council. Skilled in Pentesting.</p>
                            <div>
                                <button>Certificate <IconChevronRight size={'0.875rem'}/></button>
                            </div>
                        </div>
                        <div className="certification">
                            <div>
                                <p>2025</p>
                            </div>
                            <p className="font-semibold">MTCTCE</p>
                            <p className="text-gray-light">Mikrotik</p>
                            <p>Certified MTCTCE, Mikrotik. Skilled in Mikrotik Traffic Control.</p>
                            <div>
                                <button>Certificate <IconChevronRight size={'0.875rem'}/></button>
                            </div>
                        </div>
                        <div className="certification">
                            <div>
                                <p>2024</p>
                            </div>
                            <p className="font-semibold">MTCRE</p>
                            <p className="text-gray-light">Mikrotik</p>
                            <p>Certified MTCTCE, Mikrotik. Skilled in Mikrotik Traffic Control.</p>
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
                                <p>2007</p>
                            </div>
                            <p className="font-semibold">Bachelor of Science</p>
                            <p className="text-gray-light">Gunadarma, ID</p>
                            <p>Bachelor's degree in computer science, software engineer, and a related field.</p>
                            <div>
                                <button>Learn More <IconChevronRight size={'0.875rem'}/></button>
                            </div>
                        </div>
                        <div className="certification">
                            <div>
                                <p>2004</p>
                            </div>
                            <p className="font-semibold">Senior High School</p>
                            <p className="text-gray-light">SMAN 3 Depok, ID</p>
                            <p>Senior high school graduated studies.</p>
                            <div>
                                <button>Learn More <IconChevronRight size={'0.875rem'}/></button>
                            </div>
                        </div>
                        <div className="certification">
                            <div>
                                <p>2004</p>
                            </div>
                            <p className="font-semibold">Junior High School</p>
                            <p className="text-gray-light">SMPN 4 Depok, ID</p>
                            <p>Junior high school graduated studies.</p>
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
                <h2 className="pt-[0.625rem] pb-[1.875rem] text-[1.438rem] font-semibold md:text-[2.375rem]">Technology
                    Stack</h2>
                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2">
                    <div className="technology">
                        <div className="technology-detail">
                            <div>
                                <img src="/resources/images/rust-logo.png" alt="Rust Logo Icon"/>
                            </div>
                            <h3>Rust</h3>
                        </div>
                        <div className="technology-range">
                            <div className="w-[95%]"></div>
                        </div>
                        <p>95%</p>
                    </div>
                    <div className="technology">
                        <div className="technology-detail">
                            <div>
                                <img src="/resources/images/python-logo.png" alt="Python Logo Icon"/>
                            </div>
                            <h3>Python</h3>
                        </div>
                        <div className="technology-range">
                            <div className="w-[95%]"></div>
                        </div>
                        <p>95%</p>
                    </div>
                    <div className="technology">
                        <div className="technology-detail">
                            <div>
                                <img src="/resources/images/javascript-logo.png" alt="Javascript Logo Icon"/>
                            </div>
                            <h3>Javascript</h3>
                        </div>
                        <div className="technology-range">
                            <div className="w-[95%]"></div>
                        </div>
                        <p>95%</p>
                    </div>
                    <div className="technology">
                        <div className="technology-detail">
                            <div>
                                <img src="/resources/images/java-logo.png" alt="Java Logo Icon"/>
                            </div>
                            <h3>Java</h3>
                        </div>
                        <div className="technology-range">
                            <div className="w-[85%]"></div>
                        </div>
                        <p>85%</p>
                    </div>
                    <div className="technology">
                        <div className="technology-detail">
                            <div>
                                <img src="/resources/images/c-plus-plus-logo.png" alt="C++ Logo Icon"/>
                            </div>
                            <h3>C++</h3>
                        </div>
                        <div className="technology-range">
                            <div className="w-[75%]"></div>
                        </div>
                        <p>75%</p>
                    </div>
                    <div className="technology">
                        <div className="technology-detail">
                            <div>
                                <img src="/resources/images/c-sharp-logo.png" alt="C# Logo Icon"/>
                            </div>
                            <h3>C#</h3>
                        </div>
                        <div className="technology-range">
                            <div className="w-[75%]"></div>
                        </div>
                        <p>75%</p>
                    </div>
                    <div className="technology">
                        <div className="technology-detail">
                            <div>
                                <img src="/resources/images/kotlin-logo.png" alt="Kotlin Logo Icon"/>
                            </div>
                            <h3>Kotlin</h3>
                        </div>
                        <div className="technology-range">
                            <div className="w-[70%]"></div>
                        </div>
                        <p>70%</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[0.938rem] pt-[5.625rem]">
                <div className="title-bullet w-[10.125rem]">
                    <span><IconSettingsCode size={'1rem'}/></span>
                    <p>Tool Skills</p>
                </div>
                <h2 className="pt-[0.625rem] pb-[1.875rem] text-[1.438rem] font-semibold md:text-[2.375rem]">Tool
                    Stack</h2>
                <div className="tool-grid">
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/webstorm-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">95%</text>
                            </svg>
                        </div>
                        <h3>Webstorm</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/rust-rover-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">95%</text>
                            </svg>
                        </div>
                        <h3>Rust Rover</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/pycharm-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">95%</text>
                            </svg>
                        </div>
                        <h3>Pycharm</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/intellij-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 5}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">95%</text>
                            </svg>
                        </div>
                        <h3>IntelliJ</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/chatgpt-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 15}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">85%</text>
                            </svg>
                        </div>
                        <h3>ChatGPT</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/github-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 15}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">85%</text>
                            </svg>
                        </div>
                        <h3>Github</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/trello-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 20}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">80%</text>
                            </svg>
                        </div>
                        <h3>Trello</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range" style={{backgroundImage: "url('/resources/images/visual-studio-logo.png')"}}>
                            <svg className="tool-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 25}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="28">75%</text>
                            </svg>
                        </div>
                        <h3>Visual Studio</h3>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[0.938rem] pt-[5.625rem]">
                <h2 className="text-[1.438rem] font-semibold md:text-[2.375rem]">General Skills</h2>
                <div className="title-bullet w-[12.375rem] mt-[1.875rem]">
                    <span><IconUsersGroup size={'1rem'}/></span>
                    <p>Communication</p>
                </div>
                <div className="tool-grid">
                    <div className="tool">
                        <div className="tool-range">
                            <svg className="soft-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 10}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="21">90%</text>
                            </svg>
                        </div>
                        <h3>Critical Thinking</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range">
                            <svg className="soft-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 10}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="21">90%</text>
                            </svg>
                        </div>
                        <h3>Algorithmic Thinking</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range">
                            <svg className="soft-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 10}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="21">90%</text>
                            </svg>
                        </div>
                        <h3>Problem Solving</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range">
                            <svg className="soft-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 15}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="21">85%</text>
                            </svg>
                        </div>
                        <h3>Leadership</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range">
                            <svg className="soft-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 15}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="21">80%</text>
                            </svg>
                        </div>
                        <h3>Collaborative</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range">
                            <svg className="soft-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 20}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="21">80%</text>
                            </svg>
                        </div>
                        <h3>Time Management</h3>
                    </div>
                    <div className="tool">
                        <div className="tool-range">
                            <svg className="soft-skill" viewBox="0 0 36 36">
                                <path className="cover-range" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path className="visible-range" style={{strokeDashoffset: 20}} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <text className="percentage" x="18" y="21">80%</text>
                            </svg>
                        </div>
                        <h3>Emphaty</h3>
                    </div>
                </div>
            </section>
            <section className="skill-grid">
                <div className="skill-column">
                    <div className="title-bullet w-[9.75rem]">
                        <span><IconLanguage size={'1rem'}/></span>
                        <p>Languages</p>
                    </div>
                    <div className="skill-column-container">
                        <div className="language-item">
                            <div className="language-image">
                                <img className="rounded-[0.5rem]" src="/resources/images/english-logo.png" alt="English Flag Logo"/>
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
                                        <span className="bg-border-white dark:bg-bgd-gray"></span>
                                        <span className="bg-border-white dark:bg-bgd-gray"></span>
                                        <span className="bg-border-white dark:bg-bgd-gray"></span>
                                    </div>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                        <div className="language-item">
                            <div className="language-image">
                                <img className="rounded-[0.5rem]" src="/resources/images/bahasa-logo.png" alt="Bahasa Flag Logo"/>
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
                                        <span className="bg-border-white dark:bg-bgd-gray"></span>
                                    </div>
                                    <p>90%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill-column">
                    <div className="title-bullet w-[9.875rem]">
                        <span><IconList size={'1rem'}/></span>
                        <p>Soft Skills</p>
                    </div>
                    <div className="skill-column-container">
                        <p className="soft-skill-item"><IconCheck size={'1rem'}/> Critical thinking and
                            analytical skills</p>
                        <p className="soft-skill-item"><IconCheck size={'1rem'}/> Strong problem-solving skills
                        </p>
                        <p className="soft-skill-item"><IconCheck size={'1rem'}/> Attention to detail</p>
                        <p className="soft-skill-item"><IconCheck size={'1rem'}/> Creative Problem-Solving</p>
                        <p className="soft-skill-item"><IconCheck size={'1rem'}/> Continuous Learning</p>
                    </div>
                </div>
            </section>
        </>
    );
}
