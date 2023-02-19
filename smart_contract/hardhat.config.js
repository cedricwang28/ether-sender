require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/px4MhNKBrGOobRLy8-VPSXS0dPJivgCk',
      accounts: ['9b424e850197b59318421447ce6d9bb3b34282accd185598183741a6c7738efb'],
    },
  },
};