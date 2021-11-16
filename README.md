# platon-fxbridge

FX Bridge is a powerful yet simple implementation of Polygon state sync mechanism which can be used to create bridges for EVM chains like Ethereum, Polygon, BSC, PlatON, etc.

This project uses the [FxPortal contracts](https://github.com/jdkanani/fx-portal) which contains the main contracts FxChild (FxChild.sol) and FxRoot (FxRoot.sol) on which mapping-less bridge works. It calls and passes data to user-defined methods on another chain without mapping.

In this example, the Root chain will be Ethereum Ropsten Testnet and the Child Chain will be the PlatON Devnet Test network.


# Usage
- Clone the repository and enter the repo root.

- Make sure you have node.js v10.12.0 or higher. [details](https://platon-truffle.readthedocs.io/en/v1.0.0/getting-started/installation.html)

- From the repo root, import the Open Zeppelin contracts into your project:
```
$ npm install @openzeppelin/contracts --save
```

- Install the dependencies for the project:
```
$ npm install -g platon-truffle@1.0.0
$ npm install truffle-hdwallet-provider
```

- Compile the contracts using:
Set the compiler version in the truffle-config.js file as 0.8.2 and compile the contracts using:
```
$ platon-truffle compile
```
With the default unmodified contracts, the compilation fails. See below:
```
Compiling your contracts...
===========================
> Compiling ./contracts/FxChild.sol
> Compiling ./contracts/FxRoot.sol
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/examples/erc1155-transfer/FxERC1155ChildTunnel.sol
> Compiling ./contracts/examples/erc1155-transfer/FxERC1155RootTunnel.sol
> Compiling ./contracts/examples/erc20-transfer/FxERC20ChildTunnel.sol
> Compiling ./contracts/examples/erc20-transfer/FxERC20RootTunnel.sol
> Compiling ./contracts/examples/erc721-transfer/FxERC721ChildTunnel.sol
> Compiling ./contracts/examples/erc721-transfer/FxERC721RootTunnel.sol
> Compiling ./contracts/examples/mintable-erc20-transfer/FxMintableERC20ChildTunnel.sol
> Compiling ./contracts/examples/mintable-erc20-transfer/FxMintableERC20RootTunnel.sol
> Compiling ./contracts/examples/state-transfer/FxStateChildTunnel.sol
> Compiling ./contracts/examples/state-transfer/FxStateRootTunnel.sol
> Compiling ./contracts/lib/Address.sol
> Compiling ./contracts/lib/Context.sol
> Compiling ./contracts/lib/Create2.sol
> Compiling ./contracts/lib/ERC1155.sol
> Compiling ./contracts/lib/ERC1155Holder.sol
> Compiling ./contracts/lib/ERC1155Receiver.sol
> Compiling ./contracts/lib/ERC165.sol
> Compiling ./contracts/lib/ERC20.sol
> Compiling ./contracts/lib/ERC721.sol
> Compiling ./contracts/lib/ExitPayloadReader.sol
> Compiling ./contracts/lib/IERC1155.sol
> Compiling ./contracts/lib/IERC1155MetadataURI.sol
> Compiling ./contracts/lib/IERC1155Receiver.sol
> Compiling ./contracts/lib/IERC165.sol
> Compiling ./contracts/lib/IERC20.sol
> Compiling ./contracts/lib/IERC721.sol
> Compiling ./contracts/lib/IERC721Metadata.sol
> Compiling ./contracts/lib/IERC721Receiver.sol
> Compiling ./contracts/lib/Merkle.sol
> Compiling ./contracts/lib/MerklePatriciaProof.sol
> Compiling ./contracts/lib/Ownable.sol
> Compiling ./contracts/lib/RLPReader.sol
> Compiling ./contracts/lib/SafeMath.sol
> Compiling ./contracts/lib/Strings.sol
> Compiling ./contracts/tokens/FxERC1155.sol
> Compiling ./contracts/tokens/FxERC20.sol
> Compiling ./contracts/tokens/FxERC721.sol
> Compiling ./contracts/tokens/IFxERC1155.sol
> Compiling ./contracts/tokens/IFxERC20.sol
> Compiling ./contracts/tokens/IFxERC721.sol
> Compiling ./contracts/tunnel/FxBaseChildTunnel.sol
> Compiling ./contracts/tunnel/FxBaseRootTunnel.sol
> Compiling @openzeppelin/contracts/token/ERC20/IERC20.sol
> Compiling @openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol
> Compiling @openzeppelin/contracts/utils/Address.sol

    > compilation warnings encountered:

Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> /home/adib/code/repos/platon-fxbridge/contracts/lib/ExitPayloadReader.sol

,Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> /home/adib/code/repos/platon-fxbridge/contracts/lib/RLPReader.sol



Trace: error:  { Error: TypeError: Member "ownerOf" not found or not visible after argument-dependent lookup in contract IFxERC721.
  --> /home/adib/code/repos/platon-fxbridge/contracts/examples/erc721-transfer/FxERC721ChildTunnel.sol:50:31:
   |
50 |         require(msg.sender == childTokenContract.ownerOf(tokenId));
   |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^
    at CompileError.ExtendableError (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/error/index.js:10:1)
    at new CompileError (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/compile-solidity/compileerror.js:13:1)
    at run (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/compile-solidity/run.js:56:1)
  message:
   'TypeError: Member "ownerOf" not found or not visible after argument-dependent lookup in contract IFxERC721.\n  --> /home/adib/code/repos/platon-fxbridge/contracts/examples/erc721-transfer/FxERC721ChildTunnel.sol:50:31:\n   |\n50 |         require(msg.sender == childTokenContract.ownerOf(tokenId));\n   |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^\n\n\u001b[31mCompilation failed. See above.\u001b[39m',
  stack:
   'Error: TypeError: Member "ownerOf" not found or not visible after argument-dependent lookup in contract IFxERC721.\n  --> /home/adib/code/repos/platon-fxbridge/contracts/examples/erc721-transfer/FxERC721ChildTunnel.sol:50:31:\n   |\n50 |         require(msg.sender == childTokenContract.ownerOf(tokenId));\n   |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^\n    at CompileError.ExtendableError (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/error/index.js:10:1)\n    at new CompileError (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/compile-solidity/compileerror.js:13:1)\n    at run (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/compile-solidity/run.js:56:1)',
  name: 'CompileError' }
    at Object.compile (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/workflow-compile/legacy/index.js:82:1)
Error: CompileError: TypeError: Member "ownerOf" not found or not visible after argument-dependent lookup in contract IFxERC721.
  --> /home/adib/code/repos/platon-fxbridge/contracts/examples/erc721-transfer/FxERC721ChildTunnel.sol:50:31:
   |
50 |         require(msg.sender == childTokenContract.ownerOf(tokenId));
   |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^

Compilation failed. See above.
    at Object.compile (/home/adib/.nvm/versions/node/v10.12.0/lib/node_modules/platon-truffle/build/webpack:/packages/workflow-compile/legacy/index.js:84:1)
Truffle v1.0.0 (core: 1.0.0)
Node v10.12.0
```
The problem seems to be with the examples, which we can skip for now, as we are mainly interested in deploying the `FxChild.sol` and `FxRoot.sol` smart contracts. The code in the examples folder are examples of the usage of this methodology. You can use these examples to build your own implementations or own custom bridge. So, after removing the examples, we compile again using `platon-truffle` and get the successful compilation response like below:
```
Compiling your contracts...
===========================
> Compiling ./contracts/FxChild.sol
> Compiling ./contracts/FxRoot.sol
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/lib/Address.sol
> Compiling ./contracts/lib/Context.sol
> Compiling ./contracts/lib/Create2.sol
> Compiling ./contracts/lib/ERC1155.sol
> Compiling ./contracts/lib/ERC1155Holder.sol
> Compiling ./contracts/lib/ERC1155Receiver.sol
> Compiling ./contracts/lib/ERC165.sol
> Compiling ./contracts/lib/ERC20.sol
> Compiling ./contracts/lib/ERC721.sol
> Compiling ./contracts/lib/ExitPayloadReader.sol
> Compiling ./contracts/lib/IERC1155.sol
> Compiling ./contracts/lib/IERC1155MetadataURI.sol
> Compiling ./contracts/lib/IERC1155Receiver.sol
> Compiling ./contracts/lib/IERC165.sol
> Compiling ./contracts/lib/IERC20.sol
> Compiling ./contracts/lib/IERC721.sol
> Compiling ./contracts/lib/IERC721Metadata.sol
> Compiling ./contracts/lib/IERC721Receiver.sol
> Compiling ./contracts/lib/Merkle.sol
> Compiling ./contracts/lib/MerklePatriciaProof.sol
> Compiling ./contracts/lib/Ownable.sol
> Compiling ./contracts/lib/RLPReader.sol
> Compiling ./contracts/lib/SafeMath.sol
> Compiling ./contracts/lib/Strings.sol
> Compiling ./contracts/tokens/FxERC1155.sol
> Compiling ./contracts/tokens/FxERC20.sol
> Compiling ./contracts/tokens/FxERC721.sol
> Compiling ./contracts/tokens/IFxERC1155.sol
> Compiling ./contracts/tokens/IFxERC20.sol
> Compiling ./contracts/tokens/IFxERC721.sol
> Compiling ./contracts/tunnel/FxBaseChildTunnel.sol
> Compiling ./contracts/tunnel/FxBaseRootTunnel.sol

    > compilation warnings encountered:

Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> /home/adib/code/repos/platon-fxbridge/contracts/lib/ExitPayloadReader.sol

,Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> /home/adib/code/repos/platon-fxbridge/contracts/lib/RLPReader.sol

,Warning: Unnamed return variable can remain unassigned. Add an explicit return with value to all non-reverting code paths or name the variable.
  --> /home/adib/code/repos/platon-fxbridge/contracts/lib/MerklePatriciaProof.sol:20:30:
   |
20 |     ) internal pure returns (bool) {
   |                              ^^^^


> Artifacts written to /home/adib/code/repos/platon-fxbridge/build/contracts
> Compiled successfully using:
   - solc: 0.8.2+commit.b770a684.Emscripten.clang

```

## Deploying the contracts
We would deploy the FxRoot.sol contract on the Ethereum Ropsten Testnet. For that, we would use our testnet wallet's mnemonic along with a Ethereum network provider, which in this case would be Infura.

- Run the initial migration which is just provided by default with `platon-truffle init`:
```
$ platon-truffle migrate --network development
```
- Next add the migration for the FxRoot.sol smart contract and deploy it in the Ethereum Ropsten Testnet using `truffle migrate`.
```
$ truffle migrate --from 2 --to 2 --network ropsten
```
The result is the FxRoot smart contract deployed on the Ropsten network:
```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'ropsten-fork'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


2_deploy_fxroot.js
==================
The state sender is the deployer at  0x70d1CBEEfC527b438BEC7375f99C6b7A5836a424

   Deploying 'FxRoot'
   ------------------
   > block number:        11435054
   > block timestamp:     1637044256
   > account:             0x51eD4e59566F426Bb134Fd24ED7c7Cb5D1b75ab9
   > balance:             0.299209698409350158
   > gas used:            235681 (0x398a1)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000471362 ETH

   -------------------------------------
   > Total cost:         0.000471362 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.000471362 ETH





Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


2_deploy_fxroot.js
==================
The state sender is the deployer at  0x51eD4e59566F426Bb134Fd24ED7c7Cb5D1b75ab9

   Deploying 'FxRoot'
   ------------------
   > transaction hash:    0x864b37867f22b527d32c8d18f206616456824cac0da1a863173d1cfdc88b6d25
   > Blocks: 1            Seconds: 13
   > contract address:    0x40d094D7DAEb34025E2C5a0a973EF802DC3008Cd
   > block number:        11435064
   > block timestamp:     1637044289
   > account:             0x51eD4e59566F426Bb134Fd24ED7c7Cb5D1b75ab9
   > balance:             0.299378664117757712
   > gas used:            251981 (0x3d84d)
   > gas price:           1.200075766 gwei
   > value sent:          0 ETH
   > total cost:          0.000302396291592446 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000302396291592446 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.000302396291592446 ETH

```

The next step would be to deploy the FxChild.sol smart contract on the PlatON network.
Create a new migration file for the FxChild contract and run the migration with `platon-truffle migrate` this time:
```
$ platon-truffle migrate --f 3 --to 3 --network development
```
The result of the deployment is as below:
```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      1
> Block gas limit: 0x8fcf88


3_deploy_fxchild.js
===================

   Deploying 'FxChild'
   -------------------
   > transaction hash:    0x204b1b80088de2d1a309a9bbd9b393ef312fd4ee3492fa9de91884b4ab584bc4
   > Blocks: 5            Seconds: 4
   > contract address:    lat1wuj44ms9t32jfyqhvgkgrl4p7rwmfk4ljp5q78
   > block number:        5923405
   > block timestamp:     1637045496565
   > account:             lat13u5xqwvdzfpzhdfl8daksy66ssss9tp0fknchz
   > balance:             199.84822932
   > gas used:            291471
   > gas price:           20 gvon
   > value sent:          0 LAT
   > total cost:          0.00582942 LAT


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00582942 LAT


Summary
=======
> Total deployments:   1
> Final cost:          0.00582942 LAT

```

Now, we have both our FxBridge components, namely FxRoot and FxChild smart contracts deployed on the Ethereum Ropsten and Platon Devnet respectively.

We can now use them to build with it?
- Arbitrary state bridge ([examples/state-transfer](https://github.com/fx-portal/contracts/tree/main/contracts/examples/state-transfer))
- Normal ERC20 bridge ([examples/erc2-transfer](https://github.com/fx-portal/contracts/tree/main/contracts/examples/erc20-transfer))
- ERC20 token generator bridge ([example/mintable-erc20-transfer](https://github.com/fx-portal/contracts/tree/main/contracts/examples/mintable-erc20-transfer))
