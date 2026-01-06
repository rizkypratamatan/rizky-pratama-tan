"use client";

type Props = {
    year: string;
    role: string;
    company: string;
    description: string;
};


export default function ExperienceItem({year, role, company, description}: Props) {
    return <div className="flex flex-col gap-4 select-none embla-slide">
        <h3 className="px-7.5 text-primary-100 text-center">{year}</h3>
        <div className="experience-line"></div>
        <h4 className="px-7.5 text-lg font-semibold text-center">{role}</h4>
        <p className="px-7.5 text-text-300 text-center">{company}</p>
        <p className="px-7.5 text-center">{description}</p>
    </div>;
}
