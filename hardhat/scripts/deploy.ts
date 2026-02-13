import { network } from "hardhat";

async function main() {

    const { viem } = await network.connect({
        network: "localhost"
    });

    const [wallet] = await viem.getWalletClients();

    console.log("Deploying from:", wallet.account.address);

    const contract = await viem.deployContract("EventTest");

    console.log("✅ Contract deployed at:", contract.address);
}

main().catch(console.error);
