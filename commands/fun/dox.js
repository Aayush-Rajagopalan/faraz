const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("dox").setDescription("Doxes you"),
  async execute(interaction) {
    const ip = await fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => data.ip);
    await interaction.reply(`||${ip}||`);
  },
};
