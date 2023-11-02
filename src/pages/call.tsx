import type { MediaConnection } from 'peerjs'
// eslint-disable-next-line
import React from 'react'
import usePeerManager from '../usePeerManager'
import TableComponent from '@/components/Utils/TableComponent'
import { useEffect, useRef, useState } from 'react'


const Call: React.FC = () => {
  const { myId, callPeer, onCall } = usePeerManager()
  const [peerIdToCall, setPeerIdToCall] = useState<string | null>(null)
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [isCaller, setIsCaller] = useState<boolean>(false) // 通話を開始するユーザーを識別するためのstate
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const [pokemonButtonClicked, setPokemonButtonClicked] = useState(false) // ポケモンボタンがクリックされたかどうかの状態

  const handlePokemonClick = () => {
    setPokemonButtonClicked(true) // ポケモンボタンがクリックされた状態に更新
    handleCallPeer()
  }


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
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar goes here */}
      <div style={{ width: '300px', background: '#f0f0f0' }}>
        {/* Sidebar content here */}
      </div>

      {/* Main content area */}
      <div style={{ flexGrow: 1, position: 'relative' }}>
        {!isConnected && (
          <>
            <h1>My ID: {myId}</h1>
            <input
              type="text"
              placeholder="Enter peer ID"
              onChange={(e) => setPeerIdToCall(e.target.value)}
            />
            <button onClick={handlePokemonClick}>ポケモン</button>
            <button onClick={handleCallPeer}>遊戯王</button>
          </>
        )}
        {isConnected && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              transform: isCaller ? 'rotate(180deg)' : 'none',
              overflow: 'auto',
            }}
          >
            <TableComponent />
          </div>
        )}

        <video
          ref={remoteVideoRef}
          playsInline
          autoPlay
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            bottom: 0,
            right: 0,
          }} // Adjusted video position
        />
      </div>

    </div>
  )
}

export default Call
