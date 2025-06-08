const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require("discord.js")
const { invite } = require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("invite")
        .setDescription("Sends bot invite")
        .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
        ),
    

    run: ({ interaction, client, handeler }) => {
        const hide = interaction.options.getBoolean("private")

        const embed = new EmbedBuilder()
        .setTitle("Invite bot")
        .setDescription(`[Click here to invite the bot](${invite})`)

        if(hide == true) {
            interaction.reply({
                embeds:[embed],
                flags: MessageFlags.Ephemeral
            })
        }else if(hide == false) {
            interaction.reply({embeds:[embed]})
        }
    }
}