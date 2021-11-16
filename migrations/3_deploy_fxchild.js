const fxchild = artifacts.require("FxChild");

module.exports = function(deployer) {
    // console.log(accounts)
    // const accounts2 = await web3.platon.getAccounts();
	// const owner = accounts2[0];
    // console.log(owner);
    // console.log(network);
    deployer.deploy(fxchild);
};
