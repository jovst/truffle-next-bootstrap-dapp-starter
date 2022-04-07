import {Button} from "react-bootstrap";
import {useContext, useState} from "react";
import {ConnectModal} from "../../ConnectModal/ConnectModal";
import {globalContext} from "../../../store";
import {Account} from "./Account";

export const TopBar = (props: {

}) => {
    const { globalState, dispatch } = useContext(globalContext)
    const { account, web3 } = globalState

    const [showConnectModal, setShowConnectModal] = useState(false);
    const handleClose = () => setShowConnectModal(false);
    const handleShow = () => setShowConnectModal(true);

    return (
        <div className={"topBarContainer d-flex justify-content-end w-100 "}>
            {account ?
                <Account currency={"ETH"}/> :
                <>
                    <Button variant={"primary"} className={"connect-wallet-btn my-auto me-3"} onClick={handleShow}>
                        Connect
                    </Button>
                    <ConnectModal open={showConnectModal} handleClose={handleClose}/>
                </>
            }
        </div>
    )
}