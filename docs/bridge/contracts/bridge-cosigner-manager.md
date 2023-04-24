---
id: bridge-cosigner-manager
title: Bridge Cosigner Manager
description: Build your next blockchain app with Stratos.
keywords:
  - docs
  - stratos
  - exoswap
image: https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg
---

In order to provide anti-fraud protection, the cosigner manager is developed for. It check on validity of [enter](/docs/bridge/contracts/bridge-router#enter) result, verify correct signatures of exoswap on chain and it's uniqueness. In order to be a successfull transaction at 
[exit](/docs/bridge/contracts/bridge-router#exit) function, it should have more than 66% of votes collected from cosigners and which is called **exoswap**.


## Base functionality

The core and important logic for bridge cosigner manager

### Cosigner

```cpp
struct Cosigner {
    address addr;
    uint256 chainId;
    uint256 index;
    bool active;
}
```

- Should not be a zero to prevent unexpected behaviour;
- Should represent for what chain it specific for;
- Could be deactivate in case of compromise;

### addCosigner

```cpp
function addCosigner(address cosaddr, uint256 chainId) external;
```

- Allows only SAO to execute;
- Should not add already existing cosigner on anychain (unique in mature);
- Could not be zero address;
- Could not add cosigner for local chain, only remote chains;

### removeCosigner

```cpp
function removeCosigner(address cosaddr) external;
```

- Allows only SAO to execute;
- Should remove if it exists;
- Could not be zero address;

### getCosigners

```cpp
function getCosigners(uint256 chainId)
    external
    view
    returns (address[] memory);
```

- Should return active cosigners list for specific chain;
- Should not return cosigners for local chain;

### getCosignCount

```cpp
function getCosignCount(uint256 chainId) external view returns (uint8);
```

- Should return the number of cosigners required to proof the [enter](/docs/bridge/contracts/bridge-router#enter) validity;
- Always must be more then 66% of existing cosigners;

### verify

```cpp
function verify(
    bytes32 commitment,
    uint256 chainId,
    bytes[] calldata signatures
) external view returns (bool);
```

- Should be used in [exit](/docs/bridge/contracts/bridge-router#exit) function as basically designed for it;
- Signatures should not be equal and function must protect from this;
- Always verify external chain id;
