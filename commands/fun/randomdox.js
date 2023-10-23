const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("random").setDescription("Gets Random Member"),
  async execute(interaction) {
    const guild = interaction.client.guilds.cache.get('your_guild_id_here');
    const members = guild.members.cache.array();
    const randomMember = members[Math.floor(Math.random() * members.length)];
    await interaction.reply(`Random member: ${randomMember.user.username} (ID: ${randomMember.user.id})`);
  },
};
