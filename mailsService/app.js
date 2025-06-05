const { config } = require('dotenv');
const { Server, ServerCredentials } = require('@grpc/grpc-js');
const startConsumer = require ('./src/queue/consumers/consumer');

config({path: '.env'});

const server = new Server();

startConsumer().then(() => {
  console.log('Microservicio de correos escuchando mensajes de RabbitMQ...');
});

server.bindAsync(`${process.env.SERVER_URL}:${process.env.SERVER_PORT}`, ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
        console.error('Error al iniciar el servidor:', error);
        return;
    }
    console.log(`Servidor escuchando en ${process.env.SERVER_URL}:${process.env.SERVER_PORT}`);
});


