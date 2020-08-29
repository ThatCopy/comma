const Discord = require('discord.js');
const dotenv = require('dotenv');
const { prefix } = require('./config.json');
const fs = require('fs');

dotenv.config();
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        client.commands.get('ping').execute(message);
    }else if (message.content.startsWith(`${prefix}user`)) {
        client.commands.get('user').execute(message);
    }
});

client.login(process.env.TOKEN);
