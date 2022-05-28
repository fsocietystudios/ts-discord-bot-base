import dotenv from "dotenv";
dotenv.config();

import { Client, Intents, Collection } from "discord.js";

import type { ExtendedClient, Command } from "./interfaces/interfaces.js";

import commands from "./structures/command.js";
import events from "./structures/event.js";

const client: ExtendedClient = Object.assign(new Client({ intents: [new Intents(32767)] }), {
    config: process.env,
    commands: new Collection<string, Command>(),
    commandsArr: [],
});

commands(client);
events(client);

client.login(client.config.CLIENT_TOKEN);
