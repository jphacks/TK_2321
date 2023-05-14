"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const fastify = (0, fastify_1.default)();
async function kusa() {
    ;
    (async () => {
        await fastify.register(cors_1.default, {
        // 送り返す！
        });
        fastify.post('/data', (req) => {
            const data = req.body;
            console.log(data);
            const fmail = data.mail;
            const fpassword = data.password;
            const fname = data.name;
            const ffamilly = data.familly;
            console.log('postで受け取ることはできた');
            return main(fmail, fpassword, fname, ffamilly);
        });
        await fastify.listen({ port: 8080 });
        console.log(`Server listening at ${8080}`);
    })();
    //return main()
}
async function main(fmail, fpassword, fname, ffamilly) {
    const result = await prisma.user.create({
        data: {
            mail: fmail,
            name: fname,
            password: fpassword,
            familly: ffamilly,
        },
    });
    console.log(result);
    console.log('mainは回った');
    //return response()
}
kusa()
    .catch((e) => console.error(e))
    .finally(async () => {
    console.log('これでもう終わる！');
    await prisma.$disconnect();
});
