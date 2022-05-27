import { readdirSync } from "fs";
import { join } from "path";
import * as url from "url";
import fileUrl from "file-url";

import type ExtendedClient from "../interfaces/ExtendedClient";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const commandsFilePath = join(__dirname, "..", "commands");

export default async function (client: ExtendedClient) {
    readdirSync(commandsFilePath).map(async (value) => {
        const fileWithExtention = value.split('.ts')[0];
        const path = fileUrl(`${commandsFilePath}/${fileWithExtention}`);
        const file = await import(path);

        if (!file.default.name) return;

        client.commands?.set(file.default.name, file.default);
        client.commandsArr?.push(file.default);
    });

    console.log(`Loaded ${client.commandsArr?.length} commands.`);
};