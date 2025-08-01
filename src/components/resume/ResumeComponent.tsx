import {IconBriefcaseFilled} from "@tabler/icons-react";
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
        <div className="content bg-gradient">
            <div className="relative p-[0.625rem]">
                <div className="max-h-[38.813rem] p-[1.875rem] overflow-y-auto">
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
                                        <h3 className="text-primary">2021 - 2022</h3>
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
                    <section className="flex gap-[1.875rem] pt-[2.5rem]">
                        <div className="basis-1/2 flex">Certifications</div>
                        <div className="basis-1/2 flex">Education</div>
                    </section>
                </div>
            </div>
        </div>
    );
}
