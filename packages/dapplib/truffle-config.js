require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind uncover grace indoor fortune tumble'; 
let testAccounts = [
"0x1341649af1189c48bb1e4b3f1af552742927bf7a106a6528283e6c3671908afe",
"0xd03df2ab4085e5b959730f9d3b932855b8acfa419a65558ff383e203969f9e79",
"0xe9c168d35bf6777141d8dd2bc945227068766b6ef3d504de0029dc3a22867dac",
"0x645f23dc0a6b1f917ff7fd14082999207f064dc2de783a119b872cedba8a3f8d",
"0xf2f08d3d8f29beb073de7c6e7c450f642ec55fbc221ca3e2cf6744e10553afee",
"0xfc357f035a8ac4f2791ad497021635c1a269c9d9f63c9dcafdf4d5b32bcdc4ef",
"0x4dfcd03d4613d9f2162439b25aece502ac7740bc2e327e0454d3d427e053c5f5",
"0x49197bace85cdcf9c7d9bbbbc0a92c63d41650d22f54de603a4429d4fdb2adbb",
"0x1c556a8c35df6ac2e3d8e391d8cb999bedd940018a302c501ab06678ba5b192d",
"0x9abffe5e8e5f603a6305734a9ba10de4aebacdc16202a458f74f7b4c49ca2538"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
