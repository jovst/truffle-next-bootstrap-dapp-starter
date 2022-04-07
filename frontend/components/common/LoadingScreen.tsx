import {Spinner} from "react-bootstrap";

export const LoadingScreen = (props:{

}) => {

    return (
        <div className={"loading-screen-container d-flex justify-content-center align-items-center"}>
            <div className={"text-center"}>
                <Spinner variant={"primary"} animation={"grow"}/>
                <p>Loading...</p>
            </div>
        </div>
    );
}