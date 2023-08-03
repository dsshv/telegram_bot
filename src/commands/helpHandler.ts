import DefaultHandler from "./utils/defaultHandler";

export default class CommandHelpHandler extends DefaultHandler {

    async run() {
        await this.bot.sendSticker(this.chatId, "CAACAgIAAxkBAAKlP2TKWHvuBjnlY4EmOpsiPQEGxdp7AAInGAACl3nhS9YBFhLexd9PLwQ");
    }
}