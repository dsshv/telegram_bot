require('dotenv').config();
const TelegramApi = require('node-telegram-bot-api');

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

const bot = new TelegramApi(TOKEN, { polling: true });

bot.setMyCommands([
    { command: '/info', description: 'qweasd' }
])

export default bot



