import type { Interaction } from "discord.js";
import type { ExtendedClient } from "../interfaces/interfaces";

async function interactionCreate (client: ExtendedClient, interaction: Interaction) {
    if (interaction.isCommand()) {
        const cmd = client.commands.get(interaction.commandName);
        if (!cmd) return interaction.followUp({ content: "An error has occured!" });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);

                option.options?.forEach((x) => { if (x.value) args.push(x.value); });
            } else if (option.value) args.push(option.value);
        }

        const guildMember = interaction.guild?.members.cache.get(interaction.user.id);
        const interactionWithGuildMember = Object.assign(interaction, { guildMember });

        cmd.run(client, interactionWithGuildMember, args);
    };
};

export default interactionCreate;
