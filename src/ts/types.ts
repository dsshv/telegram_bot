type CommandHandler = {
    [command: string] : {
        scopes: string[],
        fn: () => any,
        needAuth?: boolean
    } 
}