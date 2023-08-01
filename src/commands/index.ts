const commandSortList = [
    '/start',
    '/help'
]

const commandHandlers: CommandHandler = {
    '/help': {
        fn: commandHelp,
        scopes: [],
        needAuth: false
    }
}

function commandHelp() {
    return true;
}