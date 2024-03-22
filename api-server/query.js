const { getCCP } = require("./buildCCP");
const { Wallets, Gateway } = require('fabric-network');
const path = require("path");
const walletPath = path.join(__dirname, "wallet");
const {buildWallet} =require('./AppUtils')

exports.query = async (request) => {
    let org;

    // Extract numeric part from org string
    if (request.org) {
        org = Number(request.org.match(/\d+/)[0]);
    } else {
        throw new Error("Invalid org provided in the request.");
    }

    const ccp = getCCP(org);
    const wallet = await buildWallet(Wallets, walletPath);
    const gateway = new Gateway();

    try {
        await gateway.connect(ccp, {
            wallet,
            identity: request.userId,
            discovery: { enabled: true, asLocalhost: false }
        });

        const network = await gateway.getNetwork(request.channelName);
        const contract = network.getContract(request.chaincodeName);
        const data = Object.values(request.data);
        const result = await contract.evaluateTransaction(...data);

        return result.toString(); // Convert result to string before returning
    } finally {
        // Ensure gateway disconnects regardless of success or failure
        if (gateway) {
            gateway.disconnect();
        }
    }
};
