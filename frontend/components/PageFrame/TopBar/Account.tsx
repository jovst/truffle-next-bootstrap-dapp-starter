import {useContext, useEffect, useState} from "react";
import {globalContext} from "../../../store";
import {Button} from "react-bootstrap";
import {toast} from "react-toastify";

export const Account = (props: {
    currency : string
}) => {
    const {globalState, dispatch} = useContext(globalContext)
    const {account, web3, provider} = globalState
    const [balance, setBalance] = useState(0);
    const {currency} = props;

    useEffect( ()=>{
        web3?.eth.getBalance(account).then((result)=>{
            setBalance(parseInt(result!)/1e18)
        })
    }, [])

    async function handleDeactivateAccount() {
        if (provider && !provider.isMetaMask) { // isWalletConnect then
            await provider.disconnect()
        }
        dispatch({ type: 'CLEAR_STATE'})
    }

    const copyAddress = (event: React.MouseEvent<HTMLImageElement>) =>{
        window.navigator.clipboard.writeText(account).then(r => {
            toast.success('Address copied', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    return (
        <div className={"account-container d-flex"}>
            <div className={"account-label my-auto me-3"}>
                <div className={"d-flex mb-3"}>
                    <img onClick={event => copyAddress(event)} width={24} height={24} src={"/icons/person-bounding-box.svg"} alt={"img"} className={"address-img me-2 my-auto"}/>
                    <div className={"my-auto"}>{account.slice(0, 6)}...{account.slice(
                        account.length - 4,
                        account.length)}</div>
                </div>
                <div className={"d-flex"}>
                    <img width={24} height={24} src={"/icons/wallet.svg"} alt={"img"} className={"me-2 my-auto"}/>
                    <div className={"my-auto"}>{balance.toFixed(5)} {currency}</div>
                </div>
            </div>

            <div className={"account-logout my-auto h-100"}>
                <Button onClick={handleDeactivateAccount} className={"btn btn-logout"}>
                    <img width={40} src={"/icons/box-arrow-left.svg"} alt={"img"} className={"my-auto"}/>
                </Button>
            </div>
        </div>
    )
}