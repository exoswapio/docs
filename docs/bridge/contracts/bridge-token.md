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

For the Exoswap's Bridge tokens connection between chains, used [**exoswap**](/docs/bridge/glossary) token to make a mapping with [**donor**](/docs/bridge/glossary) token

The whole design is simple. It is a ERC-20 contract with mint/burn functions where [**Bridge Token Manager**](/docs/bridge/contracts/bridge-token-manager) will handle the token mapping and [**Bridge Router**](/docs/bridge/contracts/bridge-router) will have only access to perform this operations.


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

In case donored token change it's symbol (like proxy contract), the following changes could be made to change it for exoswap token by SAO

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

NOTE: `updateTokenInfo` function aren't not implemented for bridge usage (will be in Version 1).