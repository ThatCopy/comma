const Discord = require('discord.js');
const request = require("request");

let re = /\b(pun|programming|miscellaneous|dark)\b/i

module.exports = {
	name: 'joke',
	description: 'tells you a joke',
	async execute(message, args) {
        if(args.length){
            if(re.test(args[0])){
                request.get("https://sv443.net/jokeapi/v2/joke/" + args[0], (error, response, body) => {
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
                        message.reply("📡 Couldn't connect to JokeAPI.");
                    }
                });
            }
            else{
                var embed = new Discord.MessageEmbed()
                    .setColor("#8a2de1")
                    .setFooter("Powered by JokeAPI - https://jokeapi.dev ")
                    .setTitle("Error, joke category is not valid. Categories:")
                    .setDescription("- Miscellaneous\n- Programming\n- Dark\n- Pun\n\nFor Any leave the flags empty.")
                message.reply(embed);
            }
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
                    message.reply("📡 Couldn't connect to JokeAPI.");
                }
            });
        }
    }}