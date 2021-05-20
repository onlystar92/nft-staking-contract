const {
    silenceWarnings,
} = require("@openzeppelin/truffle-upgrades");
var MasterChef = artifacts.require("MasterChef");

module.exports = function (deployer, network, accounts) {
    console.log(network, accounts)
    return deployer.then(() => {
        return deployContracts(deployer, network, accounts)
    })
};


async function deployContracts(deployer, network, accounts) {
    const DopAddress = process.env.TOKEN
    const devaddr = '0x44775774cc1aab3a349cd3f778d51ebd868ff5fd';
    const dopPerBlock = web3.utils.toWei('0.0310019841269841');
    const block = await web3.eth.getBlock("latest");
    let startBlock;
    let bonusEndBlock;

    silenceWarnings();

    if (network == 'rinkeby') {
        startBlock = block.number;
        bonusEndBlock = block.number - 1;
    }
    if (!startBlock) {
        console.log('NO START BLOCK!');
        process.exit(1);
    }
    if (!devaddr) {
        console.log('NO devaddr!');
        process.exit(1);
    }
    // Deploy MasterChef
    await deployer.deploy(
        MasterChef,
        DopAddress,
        // devaddr,
        dopPerBlock,
        startBlock,
        bonusEndBlock,
    );
    const _MasterChef = await MasterChef.deployed();
    console.log("Deployed MasterChef", _MasterChef.address);
}
