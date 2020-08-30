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
	async execute(message, args, client) {
        try {
            w = await wiki().page(args[0].replace("-", " "))
            message.channel.send("Loading ...").then(async m => {
            const embed = new Discord.MessageEmbed()
                .setColor('#ff00ff')
                .setTitle(capitalize(args[0].replace("-", " ")))
                .setDescription(`${await w.summary()} **Learn more by clicking at the title.**`) //nightmare
                .setImage(await w.mainImage())
                .setURL(await w.url())
            m.edit(embed)
            message.react('✅');})
        } catch (error) {
            message.react('❌'); 
            message.channel.send("There was a error calling the API. " + error)
        }
    }}