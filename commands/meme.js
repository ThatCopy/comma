const Discord = require('discord.js');
const request = require("request");

module.exports = {
	name: 'meme',
    description: 'get a meme',
    async execute(message, args, client) {
        request.get("https://meme-api.herokuapp.com/gimme", (error, response, body) => {
            let json = JSON.parse(body);
            var embed = new Discord.MessageEmbed()
                .setColor("#FF5700")
                .setTitle(json.title)
                .setImage(json.url)
                .setFooter(`Meme made by ${json.author}. Powered by Meme_Api - https://github.com/R3l3ntl3ss/Meme_Api`)
            message.channel.send(embed);
        });
    }}