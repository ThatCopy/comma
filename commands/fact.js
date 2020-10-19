const request = require("request")
const Discord = require("discord.js")

module.exports = {
	name: 'game',
	description: 'rock paper scissors',
	async execute(message, args, client) {
        request.get("https://uselessfacts.jsph.pl/random.json?language=en", (error, response, body) => {
            if(error){
                message.channel.send("Something went wrong")
                return
            }
            let parsedText = JSON.parse(body)
            let text = parsedText.text
            let safeText = text.replace(/`/g, "'")

            let embed = Discord.MessageEmbed()
                .setColor("#ffffff")
                .setDescription(safeText)
            message.channel.send(embed)
        })
    }
}