---
id: network
title: Network
description: Build your next blockchain app with Exoswap.
keywords:
  - docs
  - exoswap
  - stratos
image: https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="mesos"
  values={[
    { label: 'Mesos-Testnet', value: 'mesos', },
  ]
}>
<TabItem value="mesos">

# Mesos-Testnet
Mesos Testnet replicates the Stratos Mainnet, which is to be used for testing. Testnet coins are separate and distinct from actual tokens/assets, and are never supposed to have any value. This allows application developers or validators/testers to experiment, without having to use real assets or worrying about breaking the main Stratos chain.

The documentation corresponding contains details for the RPC - HTTP, WS endpoints. There is also a full node setup if you wish to setup your own full node.

|              |                                        |
|--------------|----------------------------------------|
| NetworkName  | **Mesos** ([Add to MetaMask](https://chainlist.org/?chain=2048&search=stratos&testnets=true))                                |
| chainId      | `2047`                                  |
| Gas Token    | `STOS Token` ([For more...](gas-token)) |
| RPC          | `https://web3-rpc-mesos.thestratos.org` |
| Block Explorer |[`https://web3-explorer-mesos.thestratos.org`](https://web3-explorer-mesos.thestratos.org)|
| Faucet | https://faucet-mesos.thestratos.org |
| Thegraph (graphql) | [`https://web3-thegraph-mesos.thestratos.org/subgraphs/name/`](https://web3-thegraph-mesos.thestratos.org/subgraphs/name/)
| Thegraph (rpc) | [`https://web3-thegraph-mesos.thestratos.org/rpc/`](https://web3-thegraph-mesos.thestratos.org/rpc/)
| Thegraph (ipfs) | [`https://web3-thegraph-mesos.thestratos.org/ipfs/`](https://web3-thegraph-mesos.thestratos.org/ipfs/)

:::important
Mesos network native token is **STOS** which will be used as gas fee.
:::

</TabItem>

</Tabs>
