import TelegramBot from "node-telegram-bot-api";

export interface HandlerOptions {
    bot: TelegramBot;
    message: TelegramBot.Message;
}