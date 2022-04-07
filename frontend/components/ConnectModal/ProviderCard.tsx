import {Col} from "react-bootstrap";

export const ProviderCard = (props:{
    name: string
    text: string
    imgSrc: string
    onClick: any
}) => {
    const {name, text, imgSrc, onClick} = props;

    return (
        <>
            <Col onClick={onClick} lg={6} sm={12} className={"text-center provider-card"}>
                <img width={50} height={50} src={imgSrc} alt={"img"} className={"mb-1"}/>
                <h4>{name}</h4>
                <p>{text}</p>
            </Col>
        </>
    );
}