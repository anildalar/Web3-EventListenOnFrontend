import { abi } from "./abi";

export const CONTRACT_ADDRESS =
  "0x5fbdb2315678afecb367f032d93f642f64180aa3" as const;

export const contractConfig = {
  address: CONTRACT_ADDRESS,
  abi,
} as const;
