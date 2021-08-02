const AirdropClaim = artifacts.require("AirdropClaim");

module.exports = function (deployer) {
    deployer.deploy(AirdropClaim, '0x46bF747DeAC87b5db70096d9e88debd72D4C7f3C'); //SEL Testnet Address
};