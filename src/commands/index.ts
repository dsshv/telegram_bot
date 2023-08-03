import CommandHelpHandler from "./helpHandler"

export const CommandHandlers = {
    '/help': CommandHelpHandler,
    '/info': CommandHelpHandler,
};

export type CommandHandlersType = typeof CommandHandlers;

export const isHandler = (arg: string): arg is keyof CommandHandlersType => {
    return arg in CommandHandlers
}

export default function Handler(options: any, type: keyof typeof CommandHandlers)
{   
    switch (type) 
    {
        case '/help': return new CommandHelpHandler(options);
    }
}