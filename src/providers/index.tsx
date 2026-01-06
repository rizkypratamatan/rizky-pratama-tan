import ReduxProvider from "@/providers/ReduxProvider";
import TanstackProvider from "@/providers/TanstackProvider";
import {ReactNode} from "react";


type Props = {
    children: ReactNode;
};


export default function Providers({children}: Props) {
    return <ReduxProvider>
        <TanstackProvider>{children}</TanstackProvider>
    </ReduxProvider>;
}
