import bot from "./bot";
import Handler, { isHandler } from "./commands";
import TelegramBot from "node-telegram-bot-api";

bot.on('message', async (msg: TelegramBot.Message) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    console.log(msg.chat.id);
    let handler;
    
    if (text && isHandler(text)) {
        handler = Handler({bot: bot, message: msg}, text);
        if (handler) handler.run();
        else bot.sendMessage(chatId, 'Ошибка на стороне сервера');
    } else {
        bot.sendMessage(chatId, 'Не понял вашего сообщения');
    }
});

console.log("BOT SUCCESSFULLY STARTED");
