import Bulb from "@/components/Bulb";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import React, {Fragment} from "react";


type Props = {
    children: React.ReactNode;
};

const LayoutProvider: React.FC<Props> = async({children}) => {
    return <Fragment>
        <Bulb/>
        <div className="relative z-10 h-screen">
            <div className="flex flex-col gap-6 items-start mx-auto xs:max-w-201.25 xs:mx-4 md-l:mx-auto lg:flex-row lg:mx-7.5 lg:max-w-470 3xl:mx-auto">
                <div className="side">
                    <Header/>
                    <Sidebar/>
                </div>
                <div className="content gradient-container-hidden">
                    <div className="lg:pr-2 xl:pl-7.5 xl:py-5">
                        <ScrollArea.Root className="scroll-area">
                            <ScrollArea.Viewport className="h-full">
                                <div className="flex flex-col gap-8 p-7.5 lg:p-11">{children}</div>
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar orientation="vertical" className="flex w-1.5 p-0.5 select-none touch-none hover:w-2">
                                <ScrollArea.Thumb className="flex-1 bg-text-200 rounded-full hover:bg-text-200"/>
                            </ScrollArea.Scrollbar>
                        </ScrollArea.Root>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
};

export default LayoutProvider;
