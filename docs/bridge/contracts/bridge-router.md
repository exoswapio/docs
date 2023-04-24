---
id: bridge-router
title: Bridge Router
description: Build your next blockchain app with Stratos.
keywords:
  - docs
  - stratos
  - exoswap
image: https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg
---

Bridge Router is a core functionality which manage the token issuing (means transfer or mint/burn), double spend protection, re-entrancy guarded. It's functionality API simple in mature, in order to start a bridge process, smart contract function **enter** on local chain is used which is mean "Make enter to a bridge process for the next exit process". So after enter it is always expected to be **exit** smart contract process in terms of meaning "Have passed all checks in enter and finalize a process" on external chain.

Shortly:

`enter -> exit`

Depends on token type - donored or syndicated the following represented in chart during this processes:

|              | Donored                                             | Syndicated                                                |
|--------------|-----------------------------------------------------|-----------------------------------------------------------|
| Token prefix | STOS<br/> USDT<br/> DAI<br/> BNB<br/> ETH<br/> MATIC | STOS<br/> USDT<br/> DAI<br/> BNB<br/> ETH<br/> MATIC |
| Enter        | Lock                                                | Burn                                                      |
| Exit         | Unlock                                              | Mint                                                      |

For different token types like ERC-20/Native, the **enter** and **enterETH** used respectively. We are called **ETH** in terms to understand that Native currency with payable will be used, to make same API for all EVM chains. So in order to move STOS tokens from Stratos or ETH tokens from Ethereum, enterETH function will be used.

### enter

```cpp
function enter(
    address token,
    uint256 amount,
    uint256 amountMin,
    uint256 deadline,
    uint256 targetChainId
) external;
```

- Should not allow zero token to be used in this function (zero means native token);
- Target chain could not be equal to local chain, token manager is responsible for this;
- Should not accept zero amount;
- Should increase nonce after each successfull execution;
- Could not burn if amount does not exists on address;
- Could not withdraw from address if not enough balance;
- Token address should be address;
- Deadline should be greater than block execution time;
- Amount min should be less than amount (for relayer price deviation calculation + fee);
- Amount min could be equal to amount if tx will be without relayer;

### enterETH

```cpp
function enterETH(
    uint256 amountMin,
    uint256 deadline,
    uint256 targetChainId
) external payable;
```

- Should allow only native currency;
- Target chain could not be equal to local chain, token manager is responsible for this;
- Should not accept zero amount;
- Native token should be enable in token manager;
- Not responsible for burn or mint;
- Should increase nonce after each successfull execution;
- Deadline should be greater than block execution time;
- Amount min should be less than amount (for relayer price deviation calculation + fee);
- Amount min could be equal to amount if tx will be without relayer;

### exit

```cpp
struct ProcessorParams {
    uint256 gasLimit;
    bool useRelay;
}

function exit(
    bytes calldata data,
    bytes[] calldata signatures,
    ProcessorParams calldata params
) external;
```

- Should mint/transfer tokens on sender address;
- Sender address should be the same as it was during enter process;
- Should be protected from re-entrancy;
- Should be protected from double spend;
- Should have enough exoswap signatures to complete this operation;
- Process params adding controll for gas execution limitation and mostly for relayer purposes;
