const Discord = require('discord.js');
module.exports = {
	name: 'server',
	description: 'get server info',
	execute(message, args, client) {
        message.react('✅');
        console.log(message.guild.iconURL());
        console.log(message.guild.memberCount);
        const embed = new Discord.MessageEmbed()
            .setColor('#20a085')
            .setTitle('Server info')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                {name: "Name ", value: message.guild.name},
                {name: 'Members', value: message.guild.memberCount },
                {name: 'Server creation date', value: `${message.guild.createdAt.getDate()}.${message.guild.createdAt.getMonth()}.${message.guild.createdAt.getFullYear()}`, inline: true },
                {name: "Owner", value: message.guild.owner},
                {name: "Server region", value: message.guild.region}
            )
            message.channel.send(embed);
    }}