const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require("discord.js")
const { discinv } = require("../../config.json")
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
        .setTitle("support server")
        .setDescription(`[Click here to join the support server](${discinv}) (NOT FOR MENTAL HEALTH SUPPORT)`)

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