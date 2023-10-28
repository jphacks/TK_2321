import type { MediaConnection } from 'peerjs'
// eslint-disable-next-line
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import usePeerManager from '../usePeerManager'

const App: React.FC = () => {
  const { myId, callPeer, onCall } = usePeerManager()
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        onCall((call: MediaConnection) => {
          call.answer(stream)
          call.on('stream', (remoteStream: MediaStream) => {
            setRemoteStream(remoteStream)
          })
        })
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error)
      })
  }, [onCall])

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream
    }
  }, [remoteStream])

  const handleCallPeer = (peerId: string) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const call = callPeer(peerId, stream)
        if (call) {
          call.on('stream', (remoteStream: MediaStream) => {
            setRemoteStream(remoteStream)
          })
        }
      })
  }

  return (
    <div>
      <h1>My ID: {myId}</h1>
      <input
        type="text"
        placeholder="Enter peer ID"
        onBlur={(e) => handleCallPeer(e.target.value)}
      />
      <video
        ref={remoteVideoRef}
        playsInline
        autoPlay
      />
    </div>
  )
}

export default App
