const rq = require('request');
const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	name: 'define',
	description: 'Define a term. Uses urban dictionary.',
	async execute(message, args, client) {
        const options = {
            url: 'https://owlbot.info/api/v4/dictionary/' + args[0],
            headers: {
              'Authorization': `Token ${process.env.OWLBOTTOKEN}`
            }
          };
          function callback(error, response, body) {
            let json = JSON.parse(body);
            console.log(json)
            let embed = new Discord.MessageEmbed()
                .setTitle(json.word)
                .setThumbnail(json.definitions[0].image_url)
                .setDescription(json.definitions[0].definition)
                .setFooter("Powered by owlbot")
            message.channel.send(embed)
          }
        rq(options, callback);
        }}