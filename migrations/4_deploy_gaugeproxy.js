const { silenceWarnings } = require("@openzeppelin/truffle-upgrades");
var GaugeProxy = artifacts.require("GaugeProxy");

module.exports = function (deployer, network, accounts) {
  console.log(network, accounts);
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts);
  });
};

async function deployContracts(deployer, network, accounts) {
  const _DOP = process.env.DOP;
  const _VeDop = process.env.VeDop;
  const _MASTER = process.env.MASTERCHEF;
  silenceWarnings();

  // Deploy GaugeProxy
  await deployer.deploy(GaugeProxy, _MASTER, _VeDop, _DOP);
  const _GaugeProxy = await GaugeProxy.deployed();
  console.log("Deployed GaugeProxy", _GaugeProxy.address);
}
