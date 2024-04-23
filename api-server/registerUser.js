const {buildCAClient, enrollAdmin, registerAndEnrollUser} = require("./CAUtils");
const {buildWallet, buildCCPOrg1, buildCCPOrg2, buildCCPOrg3} = require("./AppUtils");
const {Wallets} = require('fabric-network');
const {FabricCAServices} = require('fabric-ca-client');
const {getCCP} = require("./buildCCP");
const path = require('path');

exports.registerUser = async ({OrgMSP, userId}) => {

    let org = Number(OrgMSP.match(/\d/g).join(""));

    let walletPath = path.join(__dirname, 'wallet', OrgMSP);

    let ccp = getCCP(org);

    const caClient = buildCAClient(FabricCAServices, ccp, `ca.org${org}.example.com`);

    const wallet = await buildWallet(Wallets, walletPath);

    await enrollAdmin(caClient, wallet, OrgMSP);

    await registerAndEnrollUser(caClient, wallet, OrgMSP, userId, `org${org}.department1`);



    return {
        wallet,
        walletPath
    }
}