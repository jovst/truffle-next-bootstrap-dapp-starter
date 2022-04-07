import { Dispatch } from 'react';
import Web3 from 'web3'

export interface GlobalStateInterface {
    provider: any
    web3: Web3 | null
    account: string
}

export type ActionType = {
    type: string
    payload?: any
}

export type ContextType = {
    globalState: GlobalStateInterface
    dispatch: Dispatch<ActionType>
}