"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_2 = require("fastify");
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const chatGpt_1 = require("./components/chatGpt");
const prisma = new client_1.PrismaClient();
const fastify = (0, fastify_1.default)();
const server = (0, fastify_2.fastify)();
async function kusa() {
    ;
    (async () => {
        await fastify.register(cors_1.default, {});
        fastify.post('/data', (req, reply) => {
            const data = req.body;
            const fmail = data.mail;
            const fpassword = data.password;
            //const fname: string = data.name
            const ffaculty = data.faculty;
            return main(fmail, fpassword, ffaculty, data);
        });
        fastify.post('/login', async (req, reply) => {
            const userData = req.body;
            //reply.send(userData)
        });
        //テキストを受け取りchatGPTAPIに投げる
        fastify.post('/text', async (req, reply) => {
            const text = req.body;
            const answer = await (0, chatGpt_1.chatGpt)(text.InputText);
            if (answer) {
                //await returnText(answer)
            }
            reply.send(answer);
        });
        await fastify.listen({ port: 8080 });
        console.log(`Server listening at ${8080}`);
    })();
    //return main()
}
/*
async function returnText(answer: string) {
  fastify.get('/text', (req, reply) => {
    console.log('getできた')
    return answer
  })
}
*/
async function main(fmail, fpassword, 
//fname: string,
ffaculty, data) {
    const result = await prisma.user.create({
        data: {
            mail: fmail,
            //name: fname,
            password: fpassword,
            faculty: ffaculty,
        },
    });
    //return response()
}
kusa()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
