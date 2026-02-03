import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Bulb from "@/components/ui/Bulb";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Fragment, ReactNode} from "react";
import {Toaster} from "sonner";


type Props = {
    children: ReactNode;
};


export default async function Layout({children}: Props) {
    return <Fragment>
        <Toaster className="z-100!" position="top-right" duration={5000} closeButton toastOptions={{
            classNames: {
                closeButton: 'hidden!',
                toast: 'border-0! text-white! data-[type=success]:bg-green-600! data-[type=error]:bg-red-600!'
            }
        }}/>
        <Bulb/>
        <div className="relative z-10 h-screen">
            <div className="flex flex-col gap-6 items-start mx-auto xs:max-w-201.25 xs:mx-4 md-l:mx-auto lg:flex-row lg:mx-7.5 lg:max-w-470 3xl:mx-auto">
                <div className="side-no-profile">
                    <Header/>
                </div>
                <div className="content-no-profile gradient-container-hidden">
                    <div className="xl:py-5">
                        <ScrollArea className="scroll-area">
                            <div className="flex flex-col gap-8 p-7.5 lg:p-11">{children}</div>
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
}
