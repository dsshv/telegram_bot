import { CommandHandlers } from "../commands";

type Command = {
    command: keyof typeof CommandHandlers,
    description: string
}

type CommandList = Array<Command>;

const commandsList: CommandList = [
    {
        command: "/help",
        description: 'описание работы команд'
    },
    {
        command: "/fuckleha",
        description: 'послать тестировщика'
    }
];

export default commandsList;