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
