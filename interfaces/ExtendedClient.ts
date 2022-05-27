import type { Client } from "discord.js";

interface ExtendedClient extends Client {
    config?: any,
    commands?: any,
    commandsArr?: any
}

export default ExtendedClient;