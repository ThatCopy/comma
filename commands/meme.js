const Discord = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
	name: 'meme',
    description: 'get a meme',
    async execute(message, args, client) {
        let explicit = true
        let res, json
        while(explicit){
            res = await fetch("https://meme-api.herokuapp.com/gimme")
            json = await res.json() 
            if(!json.nsfw || !json.spoiler) { explicit = false }
        }
        var embed = new Discord.MessageEmbed()
            .setColor("#FF5700")
            .setTitle(json.title)
            .setImage(json.url)
            .setFooter(`Meme made by ${json.author}. Powered by Meme_Api - https://github.com/R3l3ntl3ss/Meme_Api`)
        message.channel.send(embed)
    }
}