
import { type } from "os";
import CommandHelpHandler from "./helpHandler"

export const CommandHandlers = {
    '/help': CommandHelpHandler,
    '/info': CommandHelpHandler,
};

export type CommandHandlersType = typeof CommandHandlers;

//type HandlerByType<T> = T extends keyof CommandHandlersType ? typeof CommandHandlers[T] : undefined;

// export default function Handler(options: any, type: keyof CommandHandlersType): HandlerByType<typeof type> | undefined
// {   
//     let handler;
//     switch (type) 
//     {
//         case '/help': handler = new CommandHelpHandler(options);
//     }
//     return handler;
// }

export default function Handler(options: any, type: keyof typeof CommandHandlers)
{   
    switch (type) 
    {
        case '/help': return new CommandHelpHandler(options);
    }
}