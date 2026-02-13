'use client'

import { useWatchContractEvent } from 'wagmi'
import { contractConfig } from '@/lib/contract'

export default function Home() {

  useWatchContractEvent({
    ...contractConfig,
    eventName: 'MessageSent',

    onLogs(logs) {
      console.log("🔥 EVENT RECEIVED:", logs[0].args?.message)

      alert("Event fired: " + logs[0].args?.message)
    },
  })

  return (
    <div style={{padding:40}}>
      <h1>Listening for contract events...</h1>
      <p>Now trigger the event from Hardhat 🙂</p>
    </div>
  )
}
