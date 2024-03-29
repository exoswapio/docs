---
id: architecture
title: Overview
description: Build your next blockchain app with Exoswap.
keywords:
  - docs
  - stratos
  - exoswap
image: https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Exoswap Bridge

**URL**: https://app.exoswap.io/#/bridge

Exoswap bridge is a blockchain application designed to facilitate seamless token transitions between EVM chains. Our hardworking team has been focused on implementing the Nexus bridge, enabling smooth transitions between multiple chains simultaneously.

Architecturally, the beauty of Exoswap bridge lies in its simple and straightforward design, which enables fast and cost-effective transactions for transferring tokens between EVM chains.

### Tutorial
* Bridge interaction :movie_camera: [Your first Exoswap STOS](https://www.youtube.com)

### Comparison chart between another bridge implementations (with Ethereum)

|                      | Stratos (Exoswap)   | Polygon (Plasma)      | Polygon (PoS)         | Celo (Optics)          |
|----------------------|-------------------------|-----------------------|-----------------------|------------------------|
| Centralization       | Semi-centralized        | Decentralized         | Decentralized         | Semi-centralized       |
| Use proxy            | yes                     | no                    | no                    | yes                    |
| Supported chains     | Ethereum<br/> Stratos   | Ethereum<br/> Polygon | Ethereum<br/> Polygon | Ethereum<br/> Celo     |
| Max process duration | ~4-5 minutes            | ~7 days               | ~35-37 minutes        | ~6-8 hours             |

### Description of workflow

Currently, developers can use **Exoswap Bridge** for specific needs to automate DEX cross-chain usage behind our contracts with the help of cosigners handling. **Cosigner**, shortly, is the one who verifies and signs transactions for validity, providing its proof. The group of cosigners is called the **verifier group**, which regulates token pegging, detects fraud, and oraclizes network information.


The native chain used to create the bridge is the Stratos network, harnessing the power of EVM and referred to as the **Exoswap** bridge.

Exoswap bridge has a three-steps architecture, hovewer tokens logics differ in case of token **original transfers**. Let's introduce a quick example.

The native currency on the Stratos is STOS token. In case of Ethereum it's pegged representation will be STOS (means **mintable**). So STOS token is **mintable** token and native STOS is **original**. In combination it represent the following schema for user when he cross-chain transfer from Stratos to Ethereum:

1. Locking STOS amount on the Stratos bridge;
2. Obtain exoswap signatures for proof;
3. Ethereum bridge mints exoswap token representation in the **same** equivalent as STOS token;

So it is always 1-1 representation for the token.
The next scenario, when user wants to get a donored token back, next schema will be applied:

1. Ethereum bridge burns STOS exoswap token representation;
2. Obtain exoswap signatures for proof;
3. Unlock STOS amount on the Stratos in the **same** equivalent;

In terms of smart contract functionality, only 2 transactions will be used:
1. [enter](/docs/bridge/contracts/bridge-router#enter) function to lock (donor) / burn (exoswap);
2. [exit](/docs/bridge/contracts/bridge-router#exit) function to unlock (donor) / mint (exoswap);

Briefly:
1. All cross chain tokens have 1-to-1 equivalent;
2. Only two transactions used - enter (on source chain) and exit (on target chain);
3. Each exit requires exoswap proof;

### Token issuing flow

As example let's take Stratos to Ethereum flow

`NOTE: same flow for all cross-chains EVM networks`

<img src={useBaseUrl("img/architecture/evm_bridge_flow.drawio.svg")} />

**Start flow:**

1. User send his crypto to a bridge on Stratos network ([enter](/docs/bridge/contracts/bridge-router#enter) / [enterETH](/docs/bridge/contracts/bridge-router#enterETH));
2. Stratos network will store info about this operation, will lock if token is original or burn if token is mintable;
3. Exoswap verifier will see the commit result of **enter** operation and should ask SAO for validate a proof;
4. SAO roundrobinly will sign the transactions with 2/3 voting power and will make it available for user;
5. If bridge tx could cover execution fee, relayer will be used;

**If no:**

1. (**U6a**) User obtain exoswap's signatures for next process;
2. (**U6b**) User send transaction to a bridge on Ethereum network ([exit](/docs/bridge/contracts/bridge-router#exit)) with obtained signatures;

**If yes:**

1. (**R6**) Relayer send transaction on behalf to a bridge on Ethereum network ([exit](/docs/bridge/contracts/bridge-router#exit)) with obtained signatures;


**Rest flow:**

7. Ethereum network will store info about this operation, will unlock the 1-to-1 equivalent of tokens if token is original or mint 1-to-1 equivalent if token is mintable;
8. User receive funds after successfull execution;

## Smart contracts stack

Exoswap bridge maintains a set of smart contracts on Stratos, Ethereum, Binance, Matic, which handle the following:

- Bridge Token contract which is a exoswap token equivalent for donor token;
- Bridge Token Manager for verification 1-to-1 connection;
- Bridge Cosigner Manager verificator for exoswap;
- Bridge Router the main orchestrator for all 3 contracts above;
