import {PropsWithChildren} from "react";
import {TopBar} from "./TopBar/TopBar";

export const PageFrame = (props: PropsWithChildren<{}>) => {
    const {children} = props;

    return (
        <>
            <TopBar/>
            <div id="content">
                {children}
            </div>
        </>
    )
}