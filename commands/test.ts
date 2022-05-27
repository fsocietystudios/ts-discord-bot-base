import type { CommandInteraction } from "discord.js";
import type ExtendedClient from "../interfaces/ExtendedClient";

export default {
    name: "test",
    description: "Testing command.",
    type: 'CHAT_INPUT',
    options: [],

    run: async (client: ExtendedClient, interaction: CommandInteraction, args: any) => {
        return await interaction.reply({ content: "Hello World!", ephemeral: true }).catch(e => console.log(e));
    }
};