import bot from "./bot";

bot.on('message', (msg: any) => {
    const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
})