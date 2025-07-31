import {IconBriefcaseFilled} from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";


export default function ResumeComponent() {
    const [carousel] = useEmblaCarousel();

    return (
        <div className="content bg-gradient">
            <div className="relative p-[0.625rem]">
                <div className="max-h-[38.813rem] p-[1.875rem] overflow-y-auto">
                    <section className="flex flex-col gap-[0.938rem] pt-[2.5rem]">
                        <div className="flex gap-[0.625rem] items-center w-[8.563rem] py-[0.625rem] px-[1.25rem] border border-border-rgba-white rounded-[2rem]">
                            <span><IconBriefcaseFilled/></span>
                            <p>Resume</p>
                        </div>
                        <h2 className="pt-[0.625rem] pb-[1.875rem] text-[2.375rem] font-semibold text-white">Work
                            Experience & Education</h2>
                        <div className="embla">
                            <div className="embla-viewport" ref={carousel}>
                                <div className="embla-container">
                                    <div className="embla-slide experience">
                                        <h3>2021 - 2022</h3>
                                        <div></div>
                                        <h4>Game Developer</h4>
                                        <p>Los Angeles, XYZ Games</p>
                                        <p>Developed several successful video games using Unity 3D, Unreal and Cocos2D. Designed game features, levels and characters.</p>
                                    </div>
                                    <div className="embla-slide experience">
                                        <h3>2021 - 2022</h3>
                                        <div></div>
                                        <h4>Game Designer</h4>
                                        <p>New York, ABC Games</p>
                                        <p>Created and designed game levels and characters Developed game features and functions. Fixed bugs and optimized games.</p>
                                    </div>
                                    <div className="embla-slide experience">
                                        <h3>2019 - 2021</h3>
                                        <div></div>
                                        <h4>Gameplay Programmer</h4>
                                        <p>Carson, ABC Inc.</p>
                                        <p>Engineered a robust AI system for an open-world action game, enhancing NPC behaviors that significantly increased player immersion.</p>
                                    </div>
                                    <div className="embla-slide experience">
                                        <h3>2018 - 2019</h3>
                                        <div></div>
                                        <h4>Senior Gameplay Engineer</h4>
                                        <p>Los Angeles, Studio Wildcard</p>
                                        <p>Collaborated with the art team to integrate graphics techniques that elevated the visual fidelity of characters, crowning the studio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
