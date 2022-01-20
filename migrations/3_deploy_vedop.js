require('dotenv').config();

const { silenceWarnings } = require("@openzeppelin/truffle-upgrades");
var VeDop = artifacts.require("VeDop");

module.exports = function (deployer, network, accounts) {
  console.log(network, accounts);
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts);
  });
};

async function deployContracts(deployer, network, accounts) {
  const dopAddress = process.env.DOP;
  const name = "veDop";
  const symbol = "veDop";
  const version = "1.0";

  silenceWarnings();

  // Deploy VeDop
  await deployer.deploy(VeDop, dopAddress, name, symbol, version);
  const _VeDop = await VeDop.deployed();
  console.log("Deployed VeDop", _VeDop.address);
}
