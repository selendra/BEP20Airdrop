# BEP20Airdrop
Airdrop Smart Contract for SEL version 2 on BSC Network.

## 2nd Round Airdrop
### How does it work?
- Step 1: Everyone join airdrop program [from Date] [to date] at https://airdrop.selendra.org.
- Step 2: Manypulate the address and send it to multisend smart contract.
- Step 3: User will see the token from their address.

## 3rd Round Airdrop
#### How does it work?
- Step 1: Everyone join airdrop program [from Date] [to date] at https://airdrop.selendra.org.
- Step 2: SmartContract sign all the whitlist address.
- Step 3: When User call and sign the SmartContract will distribute the token.

#### How to claim the airdrop

- Step 1: Go to claim.selendra.org.
- Step 2: Make sure you have configured the BSC network with Metamask (If you are using Bitriel Wallet it's no need).
- Step 3: Make sure you have some BNB to pay for transaction fees (~1-2 USD worth of BNB, paid to the network.
- Step 4: Enter your BSC address and click on submit. This will fetch an authorization signature from the list of whitelisted address.
- Step 5: Confirm the transaction to claim your SEL tokens. This will send a transaction to the Airdrop smart contract.

#### CLI How to Sign
- Step 1: ``` truffle migrate --network testnet```. You will deploy contracts to the Binance testnet. (To sign the whitelist by your accounts on testnet, run``` truffle exec sign.js --network testnet```.)