import TelegramBot from "node-telegram-bot-api";

/**
 * Типы для хэндлеров
 */
export interface HandlerOptions {
    bot: TelegramBot;
    message: TelegramBot.Message;
}
