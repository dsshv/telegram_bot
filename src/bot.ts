require('dotenv').config();
import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.setMyCommands([
    { command: '/info', description: 'asd' },
    { command: '/help', description: 'qwe'}
])

export default bot



