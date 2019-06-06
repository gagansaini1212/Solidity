const HDWalletProvider = require("tuffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const Provider = new HDWalletProvider(
  "heavy purse document salad danger system blind motor jungle sword hybrid cage", //This is not real wallet you can paste mnemonic phrase here
  "https://rinkeby.infura.io/v3/4470a8f37e9d4afc9e797c6a5c29b438"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from our account", account[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi There!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};

deploy();
