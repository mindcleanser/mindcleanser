const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require("discord.js")
const { github } = require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("github")
        .setDescription("Link to the bots github repo")
        .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
        ),
    

    run: ({ interaction, client, handeler }) => {
        const hide = interaction.options.getBoolean("private")

        const embed = new EmbedBuilder()
        .setTitle("Contribute to this project")
        .setDescription(`This bot was developed by 2 developers. While we try our best to make sure we have as many resources as possible, we are only 2 people. If you have the knowhow, you can contribute to the project [here](${github})`)

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