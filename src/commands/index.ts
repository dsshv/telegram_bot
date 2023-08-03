import { HandlerOptions } from "../ts/types";
import CommandHelpHandler from "./helpHandler"
import LehaGayHandler from "./lehaGayHandler";

export const CommandHandlers = {
    '/help': CommandHelpHandler,
    '/fuckleha': LehaGayHandler,
};

export type CommandHandlersType = typeof CommandHandlers;

export const isHandler = (arg: string): arg is keyof CommandHandlersType => {
    return arg in CommandHandlers;
}

export default function Handler(options: HandlerOptions, type: keyof typeof CommandHandlers)
{   
    
    switch (type) 
    {
        case '/help': return new CommandHelpHandler(options);
        case '/fuckleha': return new LehaGayHandler(options);
    }
}