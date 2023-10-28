import express from 'express'
import cors from 'cors'
import { ExpressPeerServer } from 'peer'
import http from 'http'

const app = express()

// CORS設定を有効にします。
app.use(cors())

const PORT = 9000

// HTTPサーバーを作成します。
const server = http.createServer(app)

const peerServer = ExpressPeerServer(server, {
  path: '/myapp',
})

// PeerServer を express アプリに追加します。
app.use('/peerjs', peerServer)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
