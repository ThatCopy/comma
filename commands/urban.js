const rq = require('request');
const Discord = require('discord.js');

let w;
module.exports = {
	name: 'urban',
	description: 'Define a term. Uses urban dictionary.',
	async execute(message, args, client) {
        if(!args.length){
            message.react('❌'); 
            message.channel.send("No term was found.")
        }
        else{
            rq.get("http://api.urbandictionary.com/v0/define?term=" + args[0], (error, response, body) => {
                try{
                    let json = JSON.parse(body);
                    let embed = new Discord.MessageEmbed()
                        .setTitle(args[0])
                        .setURL(json.list[0].permalink)
                        .setDescription(json.list[0].definition.replace(/[\[\]']+/g, ''))
                        .setColor("#179948")
                        .setFooter("Powered by Urban Dictionary")
                    message.channel.send(embed);
                    message.react('✅'); 
                }catch (e){
                    message.react('❌'); 
                    if(e == "TypeError: Cannot read property 'definition' of undefined" || e == "TypeError: Cannot read property '0' of undefined" || e == "TypeError: Cannot read property 'permalink' of undefined"){
                        message.channel.send("Term was not found.")
                    }
                    else{
                        message.channel.send(e + " ")
                    }
                }
            }
            )}
    }}