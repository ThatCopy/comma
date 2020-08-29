const Discord = require('discord.js');
const request = require("request");


module.exports = {
	name: 'joke',
	description: 'tells you a joke',
	async execute(message, args) {
        if(args.length){
            //TODO check for cats
        }
        else{
            request.get("https://sv443.net/jokeapi/v2/joke/Any", (error, response, body) => {
                let json = JSON.parse(body);
                if(json.type == "single"){
                    var embed = new Discord.MessageEmbed()
                        .setTitle(json.joke)
                        .setColor("#8a2de1")
                        .setFooter("Powered by JokeAPI - https://jokeapi.dev ")
                    message.channel.send(embed);
                }
                else if(json.type == "twopart"){
                    var embed = new Discord.MessageEmbed()
                        .setDescription(`**${json.setup}** \n\n ${json.delivery}`)
                        .setColor("#8a2de1")
                        .setFooter("Powered by JokeAPI - https://jokeapi.dev ")
                    message.channel.send(embed)
                }
                else{
                    message.channel.send("JokeAPI is broken.");
                }
            });
        }
    }}