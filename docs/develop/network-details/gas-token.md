---
id: gas-token
title: STOS Gas Token
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

# Mesos Testnet :smiling_imp: 
STOS is the native token of Mesos. This is similar to Ether in Ethereum. To interact with Mesos network, STOS tokens are required to pay as gas fees.

On the Mesos chain, the Mesos tokens works as native token. This means that a user can pay gas with STOS as well as send STOS to other accounts same way as they use ETH to pay gas fees on Ethereum and send ETH to others.

Getting the STOS token please use this CURL:

```
curl --header "Content-Type: application/json" --request POST --data '{"denom":"stos","address":"<your_st1_address>"}' https://faucet-mesos.thestratos.org/credit
```
</TabItem>

</Tabs>