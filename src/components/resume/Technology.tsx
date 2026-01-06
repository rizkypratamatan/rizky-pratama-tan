import TechnologyItem from "@/components/resume/TechnolgyItem";
import TitleBullet from "@/components/ui/TitleBullet";
import TitleHeading from "@/components/ui/TitleHeading";
import {Technologies} from "@/constants/Technologies";
import TechnologyItemType from "@/types/TechnologyItem";
import {IconBarbellFilled} from "@tabler/icons-react";


export default async function Technology() {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-38 md:w-43" title="Hard Skills">
            <IconBarbellFilled className="size-4"/>
        </TitleBullet>
        <TitleHeading>Technology Stack</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
            {Technologies.map((technology: TechnologyItemType, index: number) =>
                <TechnologyItem key={index} stack={technology.name} percentage={technology.percentage}>
                    {technology.image}
                </TechnologyItem>)}
        </div>
    </section>;
}
