const { getChannel } = require('./queue/config/connection');
const emailService = require('../services/emailService');

const invoicesConsumer = async () => {
  const channel = await getChannel();

  channel.consume('invoice-events-queue', async (msg) => {
    if (!msg) return;

    try {
      const content = JSON.parse(msg.content.toString());

      if (content.event === 'INVOICE_UPDATED') {
        await emailService.sendUpdateInvoiceEmail(content);
        console.log('Correo de actualización de factura enviado:', content.videoId);
      }

      channel.ack(msg);
    } catch (error) {
      console.error('❌ Error al procesar el mensaje:', error);
      channel.nack(msg);
    }
  });
  console.log('👂 Escuchando mensajes en "invoice-events-queue"...');
};

module.exports = invoicesConsumer;