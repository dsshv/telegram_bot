import DefaultHandler from "./utils/defaultHandler";

type StickerMessage = {
    sticker: string,
    message: string
};

const getRandomSticker = (user: string): StickerMessage => {

    const lehaGayDictionary: Array<StickerMessage> = [
        {
            sticker: 'CAACAgIAAxkBAAKoRWTLxLZwfyKb2gsigyIv2XswOJMUAAKwCAACfAUHG0O2cgkmY_51LwQ',
            message: `${user} тебя попустил`
        },
        {
            sticker: 'CAACAgIAAxkBAAKoTGTLxzqyk_rr0nSJAAG88qvxv-bvxAACkggAAnwFBxuHD258RxKooC8E',
            message: `${user} ставил вам это в анус`
        },
        {
            sticker: 'CAACAgIAAxkBAAKoUGTLyKYwZ0gVleazrMCC2w_ibxo-AALHBgACwpaoGKMvykvFk2NMLwQ',
            message: `${user} интересуется, почему ты еще не под его столом`
        }
    ];

    let rand = Math.floor(Math.random() * lehaGayDictionary.length);

    return lehaGayDictionary[rand];
}

export default class LehaGayHandler extends DefaultHandler {

    async run() {
        const LEHA_CHAT_ID = process.env.LEXA_CHAT_ID || 'CHAT_WITH_LEHA';
        const name = this.msg.chat.first_name ? this.msg.chat.first_name : 'Аноним';

        const stickerMessage = getRandomSticker(name);
        await this.bot.sendMessage(LEHA_CHAT_ID, stickerMessage.message);
        await this.bot.sendSticker(LEHA_CHAT_ID, stickerMessage.sticker);
        await this.bot.sendMessage(this.chatId, "Леха успешно послан!");
    }
}