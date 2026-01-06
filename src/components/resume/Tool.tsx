import ToolItem from "@/components/resume/ToolItem";
import TitleBullet from "@/components/ui/TitleBullet";
import TitleHeading from "@/components/ui/TitleHeading";
import {Tools} from "@/constants/Tools";
import ToolItemType from "@/types/ToolItem";
import {IconSettingsCode} from "@tabler/icons-react";


export default async function Tool() {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-38 md:w-43" title="Tools Skills">
            <IconSettingsCode className="size-4"/>
        </TitleBullet>
        <TitleHeading>Tools Stack</TitleHeading>
        <div className="grid grid-cols-2 gap-7.5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {Tools.map((tool: ToolItemType, index: number) =>
                <ToolItem key={index} image={tool.image} percentage={tool.percentage} name={tool.name}/>)}
        </div>
    </section>;
}
