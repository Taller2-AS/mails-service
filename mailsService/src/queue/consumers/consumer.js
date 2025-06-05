const nodemailer = require('nodemailer');
const { getChannel, EXCHANGE_NAME } = require('./queue/config/connection');
const emailService = require('../services/emailService');

const startConsumer = async () => {
  const channel = await getChannel();

  channel.assertQueue('factura_actualizada', { durable: false });

  channel.consume('factura_actualizada', async (msg) => {
    if (!msg) return;

    const content = JSON.parse(msg.content.toString());

    if (content.event === 'FACTURA_ACTUALIZADA') {
      await emailService.enviarCorreoFactura(content);
    }

    channel.ack(msg);
  });
};

module.exports = startConsumer;