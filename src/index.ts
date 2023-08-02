import TelegramBot from "node-telegram-bot-api";
import bot from "./bot";
import Handler, { CommandHandlers, CommandHandlersType} from "./commands";
import { keys } from "ts-transformer-keys";

const asd = (arg: string): arg is keyof CommandHandlersType => {
    return arg in CommandHandlers
}

bot.on('message', async (msg: TelegramBot.Message) => {
    const chatId = msg.chat.id;
    let handler;
    
    if (msg.text && asd(msg.text)) {

        //console.log(asd(msg.text))
        handler = Handler({bot: bot, chatId: chatId}, msg.text);
        handler?.handle()
    }

    // if (handler) {
    //     handler.handle();
    // } else {
    //     bot.sendMessage(chatId, 'Received your message');
    // }
    // send a message to the chat acknowledging receipt of their message
})