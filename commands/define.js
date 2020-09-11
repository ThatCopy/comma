const rq = require('request');
const Discord = require('discord.js');
//const Owlbot = require('owlbot-js');
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
            message.channel.send(json.word + "OWO");
          }
        rq(options, callback);
        }}