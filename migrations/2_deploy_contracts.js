const AirdropClaim = artifacts.require("AirdropClaim");

module.exports = function (deployer) {
    deployer.deploy(AirdropClaim, '0x886e7b910bbe62bdffae9c7f09e1fd0b01ce5834'); //SEL Testnet Address
};