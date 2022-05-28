import { readdirSync } from "fs";
import { join } from "path";
import fileUrl from "file-url";
import * as url from "url";

import type { ExtendedClient } from "../interfaces/interfaces";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filePath = join(__dirname, "..", "events");

export default async function (client: ExtendedClient) {
    const eventFilesLength = readdirSync(filePath).length;
    const eventFiles = readdirSync(filePath);
    
    for (const eventFile of eventFiles) {
        const path = fileUrl(`${filePath}/${eventFile}`);
        const event = await import(path);
        const eventName: any = eventFile.split(".").shift();
        
        client.on(eventName, event.default.bind(null, client));
    }

    console.log(`Loaded ${eventFilesLength} events.`);
};
