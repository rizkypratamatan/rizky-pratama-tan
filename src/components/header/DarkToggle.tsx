"use client";

import {Button} from "@/components/ui/button";
import {setDark} from "@/stores/slices/layoutSlice";
import {RootState} from "@/stores/store";
import LayoutState from "@/types/LayoutState";
import {IconMoon, IconSun} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";


export default function DarkToggle() {
    const layoutState: LayoutState = useSelector((state: RootState) => state.layout);
    const dispatch: Dispatch = useDispatch();

    const toggle = () => {
        const dark: boolean = !layoutState.dark;
        dispatch(setDark(dark));

        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    };

    return <Button className="relative flex justify-center items-center w-full h-full [&:hover>svg]:text-primary-100" aria-label="Dark Toggle Button" onClick={toggle}>
        {layoutState.dark ? <IconSun className="size-5.5 duration-300"/> :
            <IconMoon className="size-5.5 duration-300"/>}
    </Button>;
}
