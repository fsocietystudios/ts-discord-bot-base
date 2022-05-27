import dotenv from "dotenv";
dotenv.config();

import { Client, Intents, Collection } from "discord.js";

import type ExtendedClient from "./interfaces/ExtendedClient.js";

import commands from "./structures/command.js";
import events from "./structures/event.js";

const client: ExtendedClient = new Client({ intents: [new Intents(32767)] });

client.config = process.env;
client.commands = new Collection();
client.commandsArr = [];

commands(client);
events(client);

client.login(client.config.CLIENT_TOKEN);