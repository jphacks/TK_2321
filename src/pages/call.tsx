import type { MediaConnection } from 'peerjs'
import React, { useState, useEffect, useRef } from 'react'
import usePeerManager from '../usePeerManager'
import TableComponent from '@/components/Utils/TableComponent'

const Call: React.FC = () => {
  const { myId, callPeer, onCall } = usePeerManager()
  const [peerIdToCall, setPeerIdToCall] = useState<string | null>(null)
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [isCaller, setIsCaller] = useState<boolean>(false) // 通話を開始するユーザーを識別するためのstate
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        onCall((call: MediaConnection) => {
          call.answer(stream)
          call.on('stream', (remoteStream: MediaStream) => {
            setRemoteStream(remoteStream)
            setIsConnected(true)
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

  const handleCallPeer = () => {
    setIsCaller(true) // 通話を開始するユーザーとして識別
    if (peerIdToCall) {
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          const call = callPeer(peerIdToCall, stream)
          if (call) {
            call.on('stream', (remoteStream: MediaStream) => {
              setRemoteStream(remoteStream)
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
      <button onClick={handleCallPeer}>ポケモン</button>
      <button onClick={handleCallPeer}>遊戯王</button>
      {isConnected && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            transform: isCaller ? 'rotate(180deg)' : 'none', // 通話を開始するユーザーのみ反転
          }}
        >
          <TableComponent />
        </div>
      )}
      {
        <video
          ref={remoteVideoRef}
          playsInline
          autoPlay
        />
      }
    </div>
  )
}

export default Call
