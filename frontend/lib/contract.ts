import { abi } from "./abi";

export const CONTRACT_ADDRESS =
  "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512" as const;

export const contractConfig = {
  address: CONTRACT_ADDRESS,
  abi,
} as const;
