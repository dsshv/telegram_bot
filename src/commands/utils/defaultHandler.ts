import TelegramBot from "node-telegram-bot-api";

export default abstract class DefaultHandler {
    
    protected readonly userId: string | null;
    protected readonly chatId: string;
    protected bot: TelegramBot;
    protected readonly prototype: any;
    
    protected abstract handle(): Promise<void>;

    constructor(options: any) {
        this.userId = options.userId ? options.userId : null;
        this.chatId = options.chatId ? options.chatId : null;

        this.bot = options.bot;
    }

    async needAuth() {
        
    }
}