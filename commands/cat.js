const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports = {
	name: 'cat',
	description: 'Get a cat photo',
	async execute(message, args, client) {
        let res = await fetch("https://www.thatcopy.pw/catapi/rest/")
        let json = await res.json()
        let embed = new Discord.MessageEmbed()
            .setImage(json.webpurl)
        message.channel.send(embed)
    }
}