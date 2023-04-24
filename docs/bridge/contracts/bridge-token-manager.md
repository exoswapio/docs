---
id: bridge-token-manager
title: Bridge Token Manager
description: Build your next blockchain app with Stratos.
keywords:
  - docs
  - stratos
  - exoswap
image: https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg
---

Bridge Token Manager is used for issuing a new tokens 1-to-1 connection between donor and exoswap tokens, revoke deprecated tokens (or after bridge update), fetching info about local token representation.

## Base functionality

The core and important logic for token issuing by manager

### issue

```cpp
function issue(
    address[] calldata tokens,
    RToken.IssueType[] calldata issueTypes,
    uint256 targetChainId
) external;
```

- Allows SAO to add a new token/s with it issue type (DEFAULT means donor and MINTABLE means syndicated);
- Should be protected from malicious changes and used by SAO;
- Specified target represent for what chain is doing for and should always connect with current chain;

### revoke

```cpp
function revoke(address targetAddr) external;
```

- Allows SAO to remove an existing token/s from connection with current chain;
- Should be used by SAO;

### getLocal

```cpp
function getLocal(address sourceAddr, uint256 targetChainId)
    external
    view
    returns (RToken.Token memory token);
```

- Allows to fetch info about local token by [**Bridge Router**](/docs/bridge/contracts/bridge-router) during [enter](/docs/bridge/contracts/bridge-router#enter)/[exit](/docs/bridge/contracts/bridge-router#exit) processes;
- If token does not exist for local chain, will return info about this;
- Should always return what issue type it has;
- Should always return what chain id it represents;

### isZero

```cpp
function isZero(uint256 targetChainId) external view returns (bool);
```

- Allows to check info about local native token if it exists by [**Bridge Router**](/docs/bridge/contracts/bridge-router) during [enter](/docs/bridge/contracts/bridge-router#enter)/[exit](/docs/bridge/contracts/bridge-router#exit) processes;
- Should not return `false` and must be set originally;
- Just a wrapper on `getLocal`;
