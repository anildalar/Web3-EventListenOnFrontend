import { network } from "hardhat";

async function main() {

    const { viem } = await network.connect({
        network: "localhost"
    });

    const contract = await viem.getContractAt(
        "EventTest", // This is your ContractName
        "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    );

    // This is array destructuring
    // Object destructuring
    const [wallet] = await viem.getWalletClients();

    console.log("Sending tx...");

    await contract.write.sendMessage(
        ["Good Morning"],
        { account: wallet.account }
    );

    console.log("Event emitted!");
}

main().catch(console.error);
