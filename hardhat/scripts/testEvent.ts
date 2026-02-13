import { network } from "hardhat";

async function main() {

    const { viem } = await network.connect({
        network: "localhost"
    });

    const contract = await viem.getContractAt(
        "EventTest",
        "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
    );

    const [wallet] = await viem.getWalletClients();

    console.log("Sending tx...");

    await contract.write.sendMessage(
        ["Hello from Hardhat 🔥"],
        { account: wallet.account }
    );

    console.log("Event emitted!");
}

main().catch(console.error);
