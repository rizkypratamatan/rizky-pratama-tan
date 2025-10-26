import ToolItem from "@/components/resume/ToolItem";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import {IconSettingsCode} from "@tabler/icons-react";
import React from "react";


const Tools: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-38 md:w-43" title="Tool Skills">
            <IconSettingsCode size={16}/>
        </TitleBullet>
        <TitleHeading>Tool Stack</TitleHeading>
        <div className="grid grid-cols-2 gap-7.5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            <ToolItem image="/images/webstorm-logo.png" percentage={95} name="Webstorm"/>
            <ToolItem image="/images/rust-rover-logo.png" percentage={95} name="Rust Rover"/>
            <ToolItem image="/images/pycharm-logo.png" percentage={95} name="Pycharm"/>
            <ToolItem image="/images/intellij-logo.png" percentage={95} name="IntelliJ"/>
            <ToolItem image="/images/chatgpt-logo.png" percentage={85} name="ChatGPT"/>
            <ToolItem image="/images/github-logo.png" percentage={85} name="Github"/>
            <ToolItem image="/images/trello-logo.png" percentage={80} name="Trello"/>
            <ToolItem image="/images/visual-studio-logo.png" percentage={75} name="Visual Studio"/>
        </div>
    </section>;
};

export default Tools;
