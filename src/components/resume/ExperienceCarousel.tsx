"use client";

import ExperienceCarouselItem from "@/components/resume/ExperienceCarouselItem";
import Button from "@/components/ui/Button";
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
                <ExperienceCarouselItem year="2022 - Present" role="R&D" company="Jakarta Utara, PT Asia Multidana" description="Responsible for creating software and hardware improvements, as well as internal software development."/>
                <ExperienceCarouselItem year="2019 - 2022" role="Software Engineer" company="Jakarta Utara, PT Asia Multidana" description="Responsible for developing software with HTML5, CSS3, Javascript, PHP, Java, Javascript, React, MySQL, MongoDB."/>
                <ExperienceCarouselItem year="2016 - 2019" role="Software Engineer" company="Kuala Lumpur, One Solution Soft Sdn Bhd" description="Responsible for developing software with HTML5, CSS3, Javascript, C# .Net and SQL Server."/>
                <ExperienceCarouselItem year="2011 - 2016" role="Software Engineer" company="Bandung, PT Bestindo Putra Mandiri" description="Responsible for developing software with HTML5, CSS3, Javascript, PHP and MySQL."/>
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
