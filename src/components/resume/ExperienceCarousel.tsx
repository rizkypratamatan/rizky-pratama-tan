"use client";

import ExperienceCarouselItem from "@/components/resume/ExperienceCarouselItem";
import Button from "@/components/ui/Button";
import ExperiencesConst from "@/constants/Experiences";
import {EmblaCarouselType} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, {useCallback, useEffect, useState} from "react";


const ExperienceCarousel: React.FC = () => {
    const [carousel, api] = useEmblaCarousel({align: 'start'});
    const [selected, setSelected] = useState<number>(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const dotClick = (index: number) => {
        if(api) {
            api.scrollTo(index);
            setSelected(index);
        }
    }

    const onSelect = useCallback((api: EmblaCarouselType) => {
        setSelected(api.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if(api) {
            setScrollSnaps(api.scrollSnapList());
            api.on('select', onSelect);
        }
    }, [api, onSelect]);

    return <div className="embla">
        <div className="embla-viewport" ref={carousel}>
            <div className="embla-container">
                {ExperiencesConst.map((experience, index) => (
                    <ExperienceCarouselItem key={index} year={experience.year} role={experience.role} company={experience.company} description={experience.description}/>
                ))}
            </div>
        </div>
        <div className="embla-dots">
            {scrollSnaps.map((_, index) => (
                <Button key={index} className={index === selected ? 'selected' : ''} aria-label="Carousel Bullet" onClick={() => dotClick(index)}></Button>
            ))}
        </div>
    </div>;
};

export default ExperienceCarousel;
