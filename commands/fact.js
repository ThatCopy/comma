const fetch = require('node-fetch')
const Discord = require("discord.js")

module.exports = {
	name: 'fact',
	description: 'Tells you a random fact',
	async execute(message, args, client) {
		let res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
		let json = await res.json()
		let text = json.text
		let safeText = text.replace(/`/g, "'")
		let embed = new Discord.MessageEmbed()
			.setColor("#3bffba")
			.setDescription(safeText)
		message.channel.send(embed)
	}
}
