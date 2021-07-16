require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture struggle crawl snow purse install screen army ghost'; 
let testAccounts = [
"0xa9b69ecd00a042bc61669e4406f28dd5b63c783bdb01dfbd2316443e0f2f913e",
"0x6cad34b020ec20eadab5233c49e302758af2d017f07875598a759cca0dc50cd3",
"0x4596d8be66690a180cde874ecfa39596614006f38ddbfd2e80f28eb296908567",
"0x93e327e9a69e846e339a6c4fcb1f4341c4e000c710e9e35eede95550d8dd1c06",
"0xdcb9820cfb7a1c42ee016f759c341d28c29bbe5074c9c486cc008eed12e6d0d2",
"0xf56043db800137ef6e7e92efa447b7d7fdafdf8cafbe6a9cd77a1f8055759fc5",
"0x97cba21d5fab8cbe9aa111ab660fd5cf491617f84ac6e06e037e1028e3bbc3cf",
"0xc68f76b1e88e4ce7dd39eb9156ddb55c7778df146962162f47fa78d1098a56fc",
"0x633f90c7f5dbab355df6c6b5683ed135734e39d52c910fdbad9b67350c99411a",
"0xcb834d0e2ad72592ed18dc00d902a70e99a4f5982fcb6ef143c7d8bfa033a19f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

