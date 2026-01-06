import {ReactNode} from "react";


type Props = {
    children: ReactNode;
};


export default async function ServiceItemDescription({children}: Props) {
    return <p className="text-sm md:text-base">{children}</p>;
}
