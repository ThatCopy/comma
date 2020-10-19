const request = require("request")
const Discord = require("discord.js")

module.exports = {
	name: 'fact',
	description: 'Tells you a random fact',
	async execute(message, args, client) {
        request.get("https://uselessfacts.jsph.pl/random.json?language=en", (error, response, body) => {
            if(error){
                message.channel.send("Something went wrong")
                return
            }
            let parsedText = JSON.parse(body)
            let text = parsedText.text
            let safeText = text.replace(/`/g, "'")

            let embed = new Discord.MessageEmbed()
                .setColor("#3bffba")
                .setDescription(safeText)
            message.channel.send(embed)
        })
    }
}