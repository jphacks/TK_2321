"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const peer_1 = require("peer");
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
// CORS設定を有効にします。
app.use((0, cors_1.default)());
const PORT = 9000;
// HTTPサーバーを作成します。
const server = http_1.default.createServer(app);
const peerServer = (0, peer_1.ExpressPeerServer)(server, {
    path: '/myapp',
});
// PeerServer を express アプリに追加します。
app.use('/peerjs', peerServer);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
