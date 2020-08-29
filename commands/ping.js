const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
    message.channel.send("Pinging...").then(m =>{
        var ping = m.createdTimestamp - message.createdTimestamp;
        var embed = new Discord.MessageEmbed()
        .setAuthor(`Your ping to comma is ${ping}.`)
        .setColor("#000000")
        m.edit(embed)
    });
    },
};