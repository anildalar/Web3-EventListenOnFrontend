import { createConfig, webSocket } from 'wagmi'
import { localhost } from 'wagmi/chains'

export const config = createConfig({
  chains: [localhost],
  transports: {
    [localhost.id]: webSocket('http://127.0.0.1:8545'),
  },
  ssr: false, // ⭐ IMPORTANT for event listeners in POC
})
