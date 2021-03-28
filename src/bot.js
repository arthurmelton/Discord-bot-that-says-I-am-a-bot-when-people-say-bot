require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "!S";

client.on('ready', () => {
	console.log(`${client.user.tag} bot is on`);
	client.user.setActivity(`for bot`, { type: 'WATCHING' })
  		.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  		.catch(console.error);
})

client.on('message', (message) => {
	if (message.author.bot === true) return;
	if (!message.content.includes("bot")) return;
	console.log(`[${message.author.tag}]: ${message.content}`);
	message.channel.send("I am a bot, and this action was performed automatically. Please contact the moderators of this discord if you have any questions or concerns");
})

client.login(process.env.DISCORD_BOT_TOKEN);