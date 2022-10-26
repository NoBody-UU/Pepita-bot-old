const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Obtienes tu avatar o el avatar del mencionado.')
        .addUserOption(option => option.setName('objetivo').setDescription('Avatar del usuario mencionado.')),
    async run(client, interaction, language) {
        const user = interaction.options.getUser('objetivo')
        if (user) {
            const embed = new MessageEmbed()
            .setColor(config.defaultSuccessColor)
            .setDescription(client.languages.__mf({ phrase: 'avatar.objective', locale: language}, { username: user.username}))
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({embeds: [embed]})
        } else {
            const embed = new MessageEmbed()
            .setColor(config.defaultSuccessColor)
            .setDescription(client.languages.__({phrase: 'avatar.self', locale: language}))
            .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({embeds: [embed]})
        }
    }
}