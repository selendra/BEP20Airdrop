require('dotenv').config();
// const infuraKey = process.env.INFURA_KEY;


module.exports = async claim => {
    // const web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${infuraKey}`));
    const web3 = new Web3(new Web3.providers.HttpProvider(`https://data-seed-prebsc-1-s1.binance.org:8545`));
    const Web3 = require('web3');
    var fs = require('fs');
    var jsonFile = "/home/ayoung/project/BEP20Airdrop/build/contracts/AirdropClaim.json";
    var parsed = JSON.parse(fs.readFileSync(jsonFile));
    var abi = parsed.abi;
    const accounts = await web3.eth.getAccounts();
    var AirdropClaim = await AirdropClaim.deployed();// new web3.eth.Contract(abi, 0x12345678912345678912345678912345678912);
    let whitelist = require('./whitelist-signed.json')
    let me = whitelist[accounts[0].toLowerCase()]
    try {
        await AirdropClaim.claim(me.amount, me.expiredAt, me.v, me.r, me.s);
    } catch (err) {
        console.log(err);
    }
    claim();
}

// const accounts = await web3.eth.getAccounts()
// let instance = await AirdropClaim.deployed()

// // Claim
// instance.claim(me.amount, me.expiredAt, me.v, me.r, me.s)

// const helloWorld = new web3.eth.Contract([
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "output",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "pure",
//         "type": "function"
//     }
// ], '0x35c113E1AB11B3001e9085CBafD224FfC3470C67');

// helloWorld.methods.output().call({ from: '0x8863ae48646c493efF8cd54f9Ffb8Be89669E62A' }, function (error, result) {
//     console.log(result);
// });
