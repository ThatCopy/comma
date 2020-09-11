const rq = require('request');
const Discord = require('discord.js');

module.exports = {
	name: 'cat',
	description: 'Get a cat photo',
	async execute(message, args, client) {
        rq.get("https://thatcopy.pw/catapi/get/webp", (error, response, body) => {
            let json = JSON.parse(body)
            let embed = new Discord.MessageEmbed()
                .setImage(json.url)
            message.channel.send(embed);
        })}}