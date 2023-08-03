import TelegramBot, { ChatId } from "node-telegram-bot-api";
import { HandlerOptions } from "../../ts/types";

export default abstract class DefaultHandler {
    
    protected readonly msg: TelegramBot.Message;
    protected readonly chatId: ChatId;

    protected readonly bot: TelegramBot;
    
    protected abstract run(): Promise<void>;

    constructor(options: HandlerOptions) {
        this.msg = options.message;
        this.chatId = this.msg.chat.id;
        this.bot = options.bot;
    }

    async needAuth() {
        
    }
}