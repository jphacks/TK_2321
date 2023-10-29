import type { MediaConnection } from 'peerjs'
//eslint-disable-next-line
import React from 'react'
import { useState, useEffect } from 'react'
import usePeerManager from '../usePeerManager'

const Call: React.FC = () => {
  const { myId, callPeer, onCall } = usePeerManager()
  const [peerIdToCall, setPeerIdToCall] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true }) // ビデオの取得をオフにする
      .then((stream) => {
        onCall((call: MediaConnection) => {
          call.answer(stream)
          call.on('stream', () => {
            setIsConnected(true)
          })
        })
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error)
      })
  }, [onCall])

  const handleCallPeer = () => {
    if (peerIdToCall) {
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true }) // ビデオの取得をオフにする
        .then((stream) => {
          const call = callPeer(peerIdToCall, stream)
          if (call) {
            call.on('stream', () => {
              setIsConnected(true)
            })
          }
        })
    }
  }

  return (
    <div>
      <h1>My ID: {myId}</h1>
      <input
        type="text"
        placeholder="Enter peer ID"
        onChange={(e) => setPeerIdToCall(e.target.value)}
      />

      <button onClick={handleCallPeer}>Call</button>
      {isConnected && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          Hello
        </div>
      )}
    </div>
  )
}

export default Call
