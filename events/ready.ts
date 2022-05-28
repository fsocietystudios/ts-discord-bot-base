import type { ExtendedClient } from "../interfaces/ExtendedClient";

async function ready(client: ExtendedClient) {
    console.log(`Logged in as: ${client?.user?.tag}`);

    client.user?.setPresence({ activities: [{ name: 'Visual Studio Code' }], status: 'idle' });
    
    await client.application?.commands.set(client.commandsArr);
};

export default ready;
