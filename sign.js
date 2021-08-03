const fs = require('fs');
const { soliditySha3 } = require("web3-utils")
const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = async function (callback) {
    try {
        let rawdata = fs.readFileSync('whitelist.json');
        let whitelist = JSON.parse(rawdata);
        console.log(whitelist);

        // const accounts = await web3.eth.getAccounts()
        const provider = new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545');

        let candidates = {}
        for (let i = 0; i < whitelist.candidates.length; i++) {
            const h = soliditySha3(whitelist.values[i], whitelist.candidates[i], whitelist.expiredAt);
            const sig = await web3.eth.sign(h, '0x8F035537766fba83153c56a10E9b2E72e1Ff5bae')// accounts[0])
            r1 = '0x' + sig.slice(2, 64 + 2)
            s1 = '0x' + sig.slice(64 + 2, 128 + 2)
            v1 = '0x' + sig.slice(128 + 2, 130 + 2)
            if (v1 == '0x00') {
                v1 = '0x1b'
            }
            else if (v1 == '0x01') {
                v1 = '0x1c'
            }
            let candidateInfo = {
                hash: h,
                amount: whitelist.values[i],
                expiredAt: whitelist.expiredAt,
                v: v1,
                r: r1,
                s: s1
            }
            let candidateAddress = whitelist.candidates[i]
            candidates[candidateAddress.toLowerCase()] = candidateInfo
        }

        //console.log(candidates)
        let data = JSON.stringify(candidates);
        fs.writeFileSync('whitelist-signed.json', data);


    }
    catch (error) {
        console.log(error)
    }

    callback()
}