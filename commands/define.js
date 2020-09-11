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
            try {
            let json = JSON.parse(body);
            let embed = new Discord.MessageEmbed()
                .setTitle(json.word)
                .setThumbnail(json.definitions[0].image_url)
                .setDescription(json.definitions[0].definition)
                .setFooter("Powered by owlbot")
            message.channel.send(embed)} catch (error) {
                if(error == "TypeError: Cannot read property '0' of undefined"){
                    message.channel.send("No definition found")
                }
                else{
                message.channel.send("Error : " + error);
            }}
          }
        rq(options, callback);
        }}