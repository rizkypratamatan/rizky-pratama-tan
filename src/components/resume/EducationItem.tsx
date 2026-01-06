import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {IconChevronRight, IconX} from "@tabler/icons-react";
import {ReactNode} from "react";


type Props = {
    children: ReactNode;
    year: string;
    certificate: string;
    place: string;
    description: string;
    button: string;
};


export default async function EducationItem({children, year, certificate, place, description, button}: Props) {
    return <div className="resume-item">
        <div className="flex flex-col gap-2.5 p-5 ">
            <div>
                <p className="inline-block px-3 py-1 border border-border-100 rounded-lg text-xs text-center text-text-300 md:text-sm">{year}</p>
            </div>
            <p className="text-sm font-semibold md:text-base">{certificate}</p>
            <p className="text-sm text-text-300 md:text-base">{place}</p>
            <p className="text-sm md:text-base">{description}</p>
            <Dialog>
                <DialogTrigger className="flex gap-1 items-center text-sm font-semibold uppercase md:text-base" aria-label={`Learn More About ${certificate} Certificate`}>
                    <span>{button}</span>
                    <IconChevronRight className="size-4"/>
                </DialogTrigger>
                <DialogContent className="bg-background-100 border-0" showCloseButton={false}>
                    <DialogClose asChild>
                        <Button className="absolute right-2 top-2 size-8 bg-red-500 rounded-full hover:bg-red-600">
                            <IconX className="size-6"/>
                        </Button>
                    </DialogClose>
                    <DialogHeader>
                        <DialogTitle>{children}</DialogTitle>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    </div>;
}
