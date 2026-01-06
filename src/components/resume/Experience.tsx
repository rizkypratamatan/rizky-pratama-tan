"use client";

import ExperienceItem from "@/components/resume/ExperienceItem";
import {Button} from "@/components/ui/button";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Experiences} from "@/constants/Experiences";
import {setExperienceScrollSnaps, setExperienceSelected} from "@/stores/slices/resumeSlice";
import {RootState} from "@/stores/store";
import ExperienceItemType from "@/types/ExperienceItem";
import ResumeState from "@/types/ResumeState";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";


export default function Experience() {
    const resumeState: ResumeState = useSelector((state: RootState) => state.resume);
    const dispatch: Dispatch = useDispatch();

    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if(!api) {
            return;
        }

        api.on('select', () => dispatch(setExperienceSelected(api.selectedScrollSnap())));

        queueMicrotask(() => dispatch(setExperienceScrollSnaps(api.scrollSnapList())));
    }, [dispatch, api]);

    return <Carousel className="flex flex-col gap-10" setApi={setApi}>
        <CarouselContent>
            {Experiences.map((experience: ExperienceItemType, index: number) =>
                <CarouselItem key={index} className="xl:basis-1/2">
                    <ExperienceItem year={experience.year} role={experience.role} company={experience.company} description={experience.description}/>
                </CarouselItem>
            )}
        </CarouselContent>
        <div className="flex gap-2 justify-center">
            {resumeState.experience.scrollSnaps.map((_: number, index: number) => (
                <Button key={index} className={`size-2.5 p-0 rounded-full ${resumeState.experience.selected === index ? 'bg-primary-100' : 'bg-border-100'}`} onClick={() => api?.scrollTo(index)}/>
            ))}
        </div>
    </Carousel>;
}
