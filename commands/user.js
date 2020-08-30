const Discord = require('discord.js');
module.exports = {
	name: 'user',
	description: 'get user info',
	execute(message, args, client) {
        message.react('✅');
        const embed = new Discord.MessageEmbed()
            .setColor('#16a085')
            .setTitle('User info')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: "Username ", value: message.author.username},
                { name: 'Your ID ', value: message.author.id },
                { name: 'Account created on ', value: `${message.author.createdAt.getDate()}.${message.author.createdAt.getMonth()}.${message.author.createdAt.getFullYear()}`, inline: true },
            )
        message.channel.send(embed);
	},
};