import type { Client, Collection, CommandInteraction, GuildMember, ApplicationCommandDataResolvable } from "discord.js";

interface ExtendedClient extends Client {
    config: NodeJS.ProcessEnv,
    commands: Collection<string, Command>,
    commandsArr: Command[]
}

type Command = ApplicationCommandDataResolvable & {
    run(client: ExtendedClient, interaction: CommandInteractionWithGuildMember, args: unknown[]): void
}

type CommandInteractionWithGuildMember = CommandInteraction & {
    guildMember?: GuildMember
}

export {
    ExtendedClient,
    Command,
    CommandInteractionWithGuildMember
};
