import type { Interaction } from "discord.js";
import type ExtendedClient from "../interfaces/ExtendedClient";

async function interactionCreate (client: ExtendedClient, interaction: any) {
    if (interaction.isCommand()) {
        const cmd = client.commands.get(interaction.commandName);
        if (!cmd) return interaction.followUp({ content: "An error has occured!" });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);

                option.options?.forEach((x: any) => { if (x.value) args.push(x.value); });
            } else if (option.value) args.push(option.value);
        }

        interaction.guildMember = interaction.guild?.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    };

    if (interaction.isButton()) {
        console.log(21)
    }
};

export default interactionCreate;