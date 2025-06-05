const { connect } = require('amqplib');

let channel;

const EXCHANGE_NAME = ["facturacion_exchange"];

async function connectToRabbitMQ() {
    try {
        const connection = await connect(process.env.RABBITMQ_URL);
        channel = await connection.createChannel();

        await channel.assertExchange(EXCHANGE_NAME, 'fanout', { durable: true });
        await channel.assertQueue('factura_actualizada', { durable: false });
        await channel.bindQueue('factura_actualizada', EXCHANGE_NAME, '');
    } catch (error) {
        console.error('Error al conectar a RabbitMQ:', error);
        throw error;
    }
}

async function getChannel() {
    if (!channel) {
        await connectToRabbitMQ();
    }
    return channel;
}

module.exports = getChannel;