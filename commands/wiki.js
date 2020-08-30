const wiki = require('wikijs').default;
const Discord = require('discord.js');

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

let w;
module.exports = {
	name: 'wiki',
	description: 'search on wikipedia',
	execute(message, args, client) {
        try {
            message.channel.send("Loading ...").then(async m => {
            w = await wiki().page(args[0].replace("-", " "))
            const embed = new Discord.MessageEmbed()
                .setColor('#ff00ff')
                .setTitle(capitalize(args[0].replace("-", " ")))
                .setDescription(`${await w.summary()} **Learn more by clicking the title.**`) //nightmare
                .setImage(await w.mainImage())
                .setURL(w.url())
            m.edit(embed)
            message.react('✅');})
        } catch (error) {
            message.react('❌');    
            message.channel.send("There was a error calling the API." + error)
        }

    }}