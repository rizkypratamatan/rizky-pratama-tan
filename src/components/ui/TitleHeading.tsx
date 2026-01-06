import {ReactNode} from "react";


type Props = {
    children: ReactNode;
};


export default function TitleHeading({children}: Props) {
    return <h2 className="py-7.5 text-2xl font-semibold md:text-4xl">{children}</h2>;
}
