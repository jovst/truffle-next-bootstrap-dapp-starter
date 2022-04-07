# Truffle NextJS Bootstrap starter
<p>
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-blue.svg">
</p>

Basic dApp starter with:
- NextJS and TypeScript support
- MetaMask and WalletConnect Modal
- React Bootstrap 5 UI
- SASS/SCSS support
- Frontend interacting with simple storage smart contract


The dApps is interacting with a [Simple Storage](https://github.com/jovst/truffle-nextjs-bootstrap-dapp-starter/blob/main/contracts/SimpleStorage.sol) that running on Rinkeby testnet, hence you need some ETH in your wallet. If you don't have any, you can request some ETH from [Rinkeby Faucet](https://rinkebyfaucet.com/).


## Smart Contract Development
The project is bootstrapped with [Truffle](https://www.trufflesuite.com/truffle) using `truffle init` command.

Steps to run the SimpleStorage smart contract locally:
1. Clone the github repository.
    ```bash
    git clone git@github.com:jovst/truffle-nextjs-bootstrap-dapp-starter.git
    ```

2. Install Truffle globally.
    ```bash
    npm install -g truffle
    ```

3. Run the development console in the truffle-nextjs-bootstrap-dapp-starter directory.
    ```bash
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```bash
    compile
    migrate
    ```
   Please note down the contract address of the deployed SimpleStorage smart contract. We will need to update it in the front-end code.

5. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```bash
    // If inside the development console.
    test

    // If outside the development console.
    truffle test
    ```
6. Deploy smart contract to Rinkeby testnet
    - Install dependencies in the root directory.
        ```bash
        npm i
        # or
        yarn
        ```
    - Create a `.env.local` file with Infura Project ID and mnemomic of your Rinkeby account, for example:
        ```
        INFURA_PROJECT_ID='b874a2f145f84dc5a8466e5490816789'
        MNEMOMIC='seed phrase'
        ```
    - Run the `truffle migrate --network rinkeby` command to deploy smart contract to Rinkeby network.



## dApps Front End
The front-end code of the dApps is located in `frontend` directory. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and supports React Bootstrap 5 and SASS/SCSS.

The frontend is created by derived/adapted the codes from the following excellence articles:
- [Build a Web3 Dapp in React & Login with MetaMask](https://dev.to/jacobedawson/build-a-web3-dapp-in-react-login-with-metamask-4chp)
- [Global State Using Only React Hooks with the Context API (TypeScript Edition)](https://javascript.plainenglish.io/global-state-using-only-react-hooks-with-the-context-api-typescript-edition-ada822fc282c)
- [Build Your First Solidity Dapp With Web3.js and MetaMask](http://blog.adnansiddiqi.me/build-your-first-solidity-dapp-with-web3-js-and-metamask/)

Steps to run the frontend locally:
1. Install dependencies.
    ```bash
    npm i
    # or
    yarn
    ```

2. Create the `.env.local` file in the `frontend` directory and define the following environment variables:
    ```
    NEXT_PUBLIC_SIMPLE_STORAGE_CONTRACT_ADDRESS=0x...
    NEXT_PUBLIC_INFURA_PROJECT_ID=YOUR_INFURA_PROJECT_ID
    ```
   As the `.env.local` file is not stored in the repo:
    - For deployment to Vercel, you need to configure the [environment variables](https://vercel.com/docs/concepts/projects/environment-variables) there.


3. Run the development server
    ```bash
    npm run dev
    # or
    yarn dev
    ```
   Open [http://localhost:3000](http://localhost:3000) with your browser, you will see the screen of the React frontend:
   ## Connect page
   ![Connect Modal](https://github.com/jovst/truffle-nextjs-bootstrap-dapp-starter/blob/main/frontend/public/doc/modal.png?raw=true "Connect Modal")
   ## Authenticated page
   ![Authenticated Screen](https://github.com/jovst/truffle-nextjs-bootstrap-dapp-starter/blob/main/frontend/public/doc/logged-in.png?raw=true "Logged In Screen")


3. Run with MetaMask

   As `truffle develop` exposes the blockchain onto port `9545`, you'll need to add a Custom RPC network of `http://localhost:9545` in your MetaMask to make it work.

## LICENCE
MIT
