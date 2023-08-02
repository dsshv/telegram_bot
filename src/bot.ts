require('dotenv').config();
import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

// class Bot {

//     private token;
//     private bot;

//     constructor(options: any) {
//         this.token = TOKEN;
//         this.bot = options.bot;
//     }

//     set(commandList:any) {
        
//     }
// }

const bot = new TelegramBot(TOKEN, { polling: true });

bot.setMyCommands([
    { command: '/info', description: 'asd' },
    { command: '/help', description: 'qwe'}
])

export default bot



