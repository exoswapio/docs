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
defaultValue="mesos"
values={[
{ label: 'Mesos', value: 'mesos', },
{ label: 'Goerli', value: 'goerli', },
]
}>
<TabItem value="mesos">

## Mesos (Testnet)

| Contract              	| ABI                                                                                                                                                                                                                                                                 	| Address                                                                                                                                                  	|
|-----------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/mesos/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0xf4cfB062dFd0A601B4d66c56c3Df100871951867](https://web3-explorer-mesos.thestratos.org/address/0xf4cfB062dFd0A601B4d66c56c3Df100871951867/transactions) 	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/mesos/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>       	| [0x79691C47cBCBd7EfF0064722FBc5a2C73ea2dCDe](https://web3-explorer-mesos.thestratos.org/address/0x79691C47cBCBd7EfF0064722FBc5a2C73ea2dCDe/transactions) 	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/mesos/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0x51694400Ee3Fa3383122a5cBa229C6b131E79f41](https://web3-explorer-mesos.thestratos.org/address/0x51694400Ee3Fa3383122a5cBa229C6b131E79f41/transactions) 	|
</TabItem>

<TabItem value="goerli">

## Goerli (Testnet)

| Contract              	| ABI                                                                                                                                                                                                                                                          	| Address                                                                                                                                 	|
|-----------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>    	| [0x8c51a0ff7fEF18f6675532813b15b9F5ccd4a602](https://goerli.etherscan.io/address/0x8c51a0ff7fEF18f6675532813b15b9F5ccd4a602#code)              	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0x7097988a6E0a8EDC360FeCFd733C0B77938B4a75](https://goerli.etherscan.io/address/0x7097988a6E0a8EDC360FeCFd733C0B77938B4a75#code)              	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0xC26078B526454b51DbDB5367c19280070180D5fC](https://goerli.etherscan.io/address/0xC26078B526454b51DbDB5367c19280070180D5fC#readProxyContract) 	|
</TabItem>

</Tabs>