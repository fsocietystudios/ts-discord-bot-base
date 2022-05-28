
![Logo](https://www.spottocamp.com/img/powered/typescript.png)


# Discord bot code base - Writte in TypeScript

A Discord bot code base written in TypeScript.


## Features

- Organized command and event handlers.
- Written in minimal code possible.
- Extended Discord client properties.
- Supports the latest Discord.js version (Application commands, ...).


## Run Locally

Clone the project

```bash
  git clone https://github.com/HirboSH/ts-discord-bot-base
```

Go to the project directory

```bash
  cd ts-discord-bot-base
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`CLIENT_TOKEN`


## Usage / Examples

Here's an example of creating a new slash command, (Under `commands` folder).
```typescript
import type { ExtendedClient, CommandInteractionWithGuildMember } from "../interfaces/Interfaces";

export default {
    name: "test",
    description: "Testing command.",
    type: 'CHAT_INPUT',
    options: [],

    run: async (client: ExtendedClient, interaction: CommandInteractionWithGuildMember, args: any) => {
        return await interaction.reply({ content: "Hello World!", ephemeral: true }).catch(e => console.log(e));
    }
};
```
In case you'll want to add args to the command, simply just specify those inside `options: []` in this format: 

```typescript
{
    name: ArgName,
    type: ApplicationCommandOptionType, // See https://discordjs.guide/interactions/slash-commands.html#options
    description: string,
    required: bool
}
```

Here's an example of creating a new event callback, (Under `events` folder).\
This callback uses the same params as the event gives.
```typescript
import type { ExtendedClient } from "../interfaces/ExtendedClient";

async function ready(client: ExtendedClient) {
    console.log(`Logged in as: ${client?.user?.tag}`);

    client.user?.setPresence({ activities: [{ name: 'Visual Studio Code' }], status: 'idle' });
    
    await client.application?.commands.set(client.commandsArr);
};

export default ready;
```
## Support

For support, you can contact me through my email: `korenlior99@gmail.com` or either my Discord account: `hecker#1234`.


## Contributing

Will be open soon.


## Acknowledgements

 - [TypeScript Logo](https://www.spottocamp.com/img/powered/typescript.png)
 - [Awesome README Generator](readme.so)


## Authors

- [@HirboSH](https://www.github.com/HirboSH)
