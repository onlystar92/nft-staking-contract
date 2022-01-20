# drops-nft-staking
LP staking

# Deploy steps

 - Deploy Dop token

 - Deploy Masterchef

 - Deploy VeDop Token
   - `truffle migrate -f 3 --to 3 --network rinkeby`

 - Deploy Treasury Proxy and use its address in Tressury-DAO

 - Finally deploy the Gauge Proxy contract
    - `truffle migrate -f 4 --to 4 --network rinkeby`
