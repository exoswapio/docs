---
id: deployed
title: Deployed contracts
description: Build your next blockchain app with Stratos.
keywords:
  - docs
  - stratos
  - exoswap
image: https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="tropos"
values={[
{ label: 'Tropos', value: 'tropos', },
{ label: 'Goerli', value: 'goerli', },
]
}>
<TabItem value="tropos">

## Tropos (Testnet)

| Contract              	| ABI                                                                                                                                                                                                                                                                 	| Address                                                                                                                                                  	|
|-----------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/tropos/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0x8f36c8f87D6c8fA60A77f05aaE08DE60d78135f6](https://web3-testnet-explorer.thestratos.org/address/0x8f36c8f87D6c8fA60A77f05aaE08DE60d78135f6/transactions) 	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/tropos/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>       	| [0xb225db46e38f3b9f02c1affa3129273952e5fafd](https://web3-testnet-explorer.thestratos.org/address/0xb225db46e38f3b9f02c1affa3129273952e5fafd/transactions) 	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/tropos/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0xF8340B8E26e97e76619D6CC5468D939DD4a4b9FD](https://web3-testnet-explorer.thestratos.org/address/0xF8340B8E26e97e76619D6CC5468D939DD4a4b9FD/transactions) 	|
</TabItem>

<TabItem value="goerli">

## Goerli (Testnet)

| Contract              	| ABI                                                                                                                                                                                                                                                          	| Address                                                                                                                                 	|
|-----------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>    	| [0x8f36c8f87D6c8fA60A77f05aaE08DE60d78135f6](https://goerli.etherscan.io/address/0x8f36c8f87D6c8fA60A77f05aaE08DE60d78135f6#code)              	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0xB225DB46E38F3b9f02c1AfFa3129273952E5fAfD](https://goerli.etherscan.io/address/0xB225DB46E38F3b9f02c1AfFa3129273952E5fAfD#code)              	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0xeb18EDAE329359335f707Cf6941F7Fa3c6a51906](https://goerli.etherscan.io/address/0xeb18EDAE329359335f707Cf6941F7Fa3c6a51906#readProxyContract) 	|
</TabItem>

</Tabs>