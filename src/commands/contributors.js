const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require("discord.js")
const { contrib } = require("../../contributors.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("contributors")
        .setDescription("Sends Github contributors")
        .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
        ),
    

    run: ({ interaction, client, handeler }) => {
        const hide = interaction.options.getBoolean("private")

        const embed = new EmbedBuilder()
        .setTitle('these Github users have contributed to the bots developement')
        .setDescription(`${contrib}`)

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