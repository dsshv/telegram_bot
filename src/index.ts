import TelegramBot from "node-telegram-bot-api";
import bot from "./bot";
import Handler, { isHandler } from "./commands";

bot.on('message', async (msg: TelegramBot.Message) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    let handler;
    
    if (text && isHandler(text)) {
        handler = Handler({bot: bot, chatId: chatId}, text);
        if (handler) handler.run();
        else bot.sendMessage(chatId, 'Ошибка на стороне сервера');
    } else {
        bot.sendMessage(chatId, 'Не понял вашего сообщения');
    }
})