# The graph demo3
[Shimashi](https://opensea.io/collection/shimashi-nft)のサブグラフを作成。

## init

```
graph init --from-contract 0xe9814CcD783A12Ffc65E447c436b51A8a167fafd --contract-name Shimashi --index-events

✔ Protocol · ethereum
✔ Product for which to initialize · hosted-service
✔ Subgraph name · jy8752/shimashi
✔ Directory to create the subgraph in · shimashi
✔ Ethereum network · mainnet
✔ Contract address · 0xe9814CcD783A12Ffc65E447c436b51A8a167fafd
✔ Fetching ABI from Etherscan
✔ Contract Name · Shimashi
———
  Generate subgraph
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize networks config
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen
✔ Add another contract? (y/N) · false
```

## codegen

```
graph codegen
```

## deploy

```
graph auth --product hosted-service <access_token>
graph deploy --product hosted-service jy8752/shimashi
```