import { useState, useEffect } from 'react'

let Peer: any
if (typeof window !== 'undefined') {
  Peer = require('peerjs').default
}

const usePeerManager = () => {
  const [peer, setPeer] = useState<any | null>(null)
  const [myId, setMyId] = useState<string | null>(null)

  useEffect(() => {
    if (!Peer) return

    const newPeer = new Peer({
      host: '/',
      port: 9000,
      path: '/peerjs/myapp',
    })

    newPeer.on('open', (id: string) => {
      setMyId(id)
      newPeer.on('error', (err: any) => {
        console.error('Peer error:', err)
      })
    })

    setPeer(newPeer)

    return () => {
      newPeer.destroy()
    }
  }, [])

  const callPeer = (peerId: string, stream: MediaStream) => {
    if (!peer) return null
    return peer.call(peerId, stream)
  }

  const onCall = (callback: (call: any) => void) => {
    if (!peer) return
    peer.on('call', callback)
  }

  return {
    myId,
    callPeer,
    onCall,
  }
}

export default usePeerManager
