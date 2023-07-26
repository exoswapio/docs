---
id: bridge-token
title: Bridge Token
description: Build your next blockchain app with Stratos.
keywords:
  - docs
  - stratos
  - exoswap
image: https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg
---

To establish the connection between chains, the Bridge utilizes the [**exoswap**](/docs/bridge/glossary) token to create a mapping with the [**donor**](/docs/bridge/glossary) token.

The whole design is simple. It is an ERC-20 contract with mint/burn functions, where [**Bridge Token Manager**](/docs/bridge/contracts/bridge-token-manager) will handle the token mapping, and the [**Bridge Router**](/docs/bridge/contracts/bridge-router) will only have access to perform this operation.

## Base functionality

The core and important logic for bridge token

### mint

```cpp
function mint(address to, uint256 amount) external;
```

- Allows only [**Bridge Router**](/docs/bridge/contracts/bridge-router) to perform this operation by EOA/Contract;
- Should mint only in the same equivalent as locked donored tokens;

### burn

```cpp
function burn(address from, uint256 amount) external;
```

- Allows only [**Bridge Router**](/docs/bridge/contracts/bridge-router) to perform this operation by EOA/Contract;
- Should burn only in the same equivalent for next donored tokens unlock;

## Donored token symbol changed?
In case donored token changes its symbol (like proxy contract), the following changes could be made to update it for Exoswap Token by SAO.

### updateTokenInfo

```cpp
function updateTokenInfo(
    string calldata _newName,
    string calldata _newSymbol,
    uint8 _newDecimals
) external;
```

- Allows only [**Bridge Router**](/docs/bridge/contracts/bridge-router) to perform this operation by SAO;
- Should not change decimals;
---


NOTE: `updateTokenInfo` function is not implemented for bridge usage (will be in Version 1).
