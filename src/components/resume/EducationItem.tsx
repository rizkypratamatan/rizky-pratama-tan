import {IconChevronRight, IconX} from "@tabler/icons-react";
import {Dialog} from "radix-ui";
import React from "react";


type Props = {
    children: React.ReactNode;
    year: string;
    certificate: string;
    place: string;
    description: string;
    buttonText: string;
};

const EducationItem: React.FC<Props> = async({children, year, certificate, place, description, buttonText}) => {
    return <div className="resume-item">
        <div className="flex flex-col gap-2.5 p-5 ">
            <div>
                <p className="inline-block px-3 py-1 border border-border-100 rounded-lg text-xs text-center text-text-300 md:text-sm">{year}</p>
            </div>
            <p className="text-sm font-semibold md:text-base">{certificate}</p>
            <p className="text-sm text-text-300 md:text-base">{place}</p>
            <p className="text-sm md:text-base">{description}</p>
            <div>
                <Dialog.Root>
                    <Dialog.Trigger className="flex gap-1 items-center text-sm font-semibold uppercase md:text-base" aria-label={`Learn More About ${certificate} Certificate`}>
                        <span>{buttonText}</span>
                        <IconChevronRight className="size-4"/>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="dialog-overlay"/>
                        <Dialog.Content className="dialog-content">
                            <div className="dialog-container">
                                <Dialog.Close className="absolute z-100 -right-2 -top-2 p-1 bg-red-500 rounded-full hover:bg-red-600">
                                    <IconX className="size-6"/>
                                </Dialog.Close>
                                <Dialog.Title asChild>{children}</Dialog.Title>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </div>
    </div>;
};

export default EducationItem;
