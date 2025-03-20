import {ethers} from 'ethers';
const contractAddress = '0x6edB0F04456135183ADd2deCE08fDF4E62F8ad80';

const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/YOUR-ALCHEMY-API-KEY');

const signer = new ethers.Wallet("YOUR-PRIVATE-KEY", provider);

const addressTo = 'AddressTO'

const abi = [
	{
		"inputs": [],
		"name": "String",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newString",
				"type": "string"
			}
		],
		"name": "setMyString",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

(async () => {

      const contract = new ethers.Contract(
        contractAddress, abi, signer
      );

     let text = await contract.String();
     
     console.log(text)

    await contract.setMyString('Hello World')
    console.log(text)

    await contract.transfer(addressTo, {value:ethers.parseEther("0.01")})
    

})()