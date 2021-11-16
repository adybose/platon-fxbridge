const fxroot = artifacts.require("FxRoot");

module.exports = function(deployer, network, accounts) {
    statesender = accounts[0]
    console.log("The state sender is the deployer at ", statesender)
    // const accounts2 = await web3.eth.getAccounts();
	// const owner = accounts2[0];
    // console.log(owner);
    // console.log(network);
    deployer.deploy(fxroot, statesender);
};
