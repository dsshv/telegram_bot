require('dotenv').config();
import TelegramBot from "node-telegram-bot-api";
import commandsList from "./commandsList";

const TOKEN = process.env.TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.setMyCommands(commandsList);

export default bot;



