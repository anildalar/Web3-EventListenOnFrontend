'use client'
import { metaMask } from 'wagmi/connectors'
import { useConnect, useWatchContractEvent, useWriteContract } from 'wagmi'
import { contractConfig } from '@/lib/contract'

export default function Home() {
    const { writeContract } = useWriteContract()
    useWatchContractEvent({
      ...contractConfig,
      eventName: 'MessageSent',

      onLogs(logs) {
        console.log("🔥 EVENT RECEIVED:", logs[0].args?.message)

        alert("Event fired: " + logs[0].args?.message)
      },
    });
    // ✅ Button handler
    function executeEvent() {
      writeContract({
        ...contractConfig,
        functionName: 'sendMessage',
        args: ['Hello from Frontend 🚀'],
      })
    }

  return (
    <div style={{padding:40}}>
      <h1>Listening for contract events...</h1>
      <p>Now trigger the event from Hardhat 🙂</p>
      <button onClick={executeEvent}>Execute the Event</button>
    </div>
  )
}
