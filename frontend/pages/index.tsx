import type { NextPage } from 'next'
import { useContext, useState} from "react";
import {globalContext} from "../store";
import {Button, Form} from "react-bootstrap";
import SimpleStorageContract from "../public/SimpleStorage.json"
import {AbiItem} from 'web3-utils'
import {LoadingScreen} from "../components/common/LoadingScreen";
import {toast} from "react-toastify";

const Home: NextPage = () => {
    const {globalState, dispatch} = useContext(globalContext)
    const {account, web3} = globalState
    const contractAddress = process.env.NEXT_PUBLIC_SIMPLE_STORAGE_CONTRACT_ADDRESS
    const abiItems: AbiItem[] = web3! && SimpleStorageContract.abi as AbiItem[]
    const contract = web3 && contractAddress && new web3.eth.Contract(abiItems, contractAddress) as any;
    const [readInput, setReadInput] = useState(0);
    const [writeInput, setWriteInput] = useState(0);
    const [isLoading, setIsLoading] = useState(false)


    async function getSimpleStorage() {
        try {
            const result = await contract?.methods.get().call()
            setReadInput(result)
            console.log('result', result)
        }catch (error: any){
            toast.error(error.message, {
                position: "bottom-center",
                autoClose: 5000
            });
        }
    }

    async function setSimpleStorage() {
        try {
            setIsLoading(true)
            const result = await contract?.methods.set(writeInput).send({from: account})
            console.log('result', result)
        } catch (error: any) {
            toast.error(error.message, {
                position: "bottom-center",
                autoClose: 5000
            });
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {account ? isLoading? <LoadingScreen/> :
                <>
                    <div className={"container"}>
                        <Form className={"mb-4"}>
                            <Form.Group className="mb-3" controlId="formBasicGet">
                                <Form.Label>Get value</Form.Label>
                                <Form.Control value={readInput} onChange={event => setReadInput(event.currentTarget.value as any)} type="number"/>
                            </Form.Group>
                            <Button onClick={getSimpleStorage} className={"w-100"} variant={"dark"}>Get</Button>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasic">
                                <Form.Label>Store value</Form.Label>
                                <Form.Control value={writeInput} onChange={event => setWriteInput(event.currentTarget.value as any)} type="number"/>
                            </Form.Group>
                            <Button onClick={setSimpleStorage} className={"w-100"} variant={"dark"}>Store</Button>
                        </Form>
                    </div>
                </>:

                <div className={"container text-center"}>
                    Please connect first.
                </div>
            }
        </>
    )
}

export default Home