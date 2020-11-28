const Discord = require('discord.js');
const fetch = require('node-fetch')

let re = /\b(pun|programming|miscellaneous|dark)\b/i

async function getJoke(urlParams = "Any") {
    let res = await fetch("https://sv443.net/jokeapi/v2/joke/" + urlParams.replace("") + "?blacklistFlags=nsfw")
    if(res.status != 200) {throw new Error("📡 Couldn't connect to JokeAPI.")}
    let json = await res.json()
    if(json.type == "single"){return json.joke}
    else {return `**${json.setup}** \n\n ${json.delivery}`}
}

function invalidCats(message) {
    let embed = new Discord.MessageEmbed()
        .setColor("#8a2de1")
        .setFooter("Powered by JokeAPI - https://jokeapi.dev ")
        .setTitle("Error, joke category is not valid. Categories:")
        .setDescription("- Miscellaneous\n- Programming\n- Dark\n- Pun\n\nFor Any leave the flags empty.")
    message.channel.send(embed);
}

module.exports = {
	name: 'joke',
	description: 'tells you a joke',
	async execute(message, args, client) {
        var joke;
        if(args.length && !re.test(args[0])) { return invalidCats(message) }
        try {
            if(args.length){ joke = await getJoke(args[0])}            
            else { joke = await getJoke() }
        } catch (error) {
            message.channel.send("📡 Couldn't connect to JokeAPI.")
            return
        }

        let embed = new Discord.MessageEmbed()
            .setTitle(joke)
            .setColor("#8a2de1")
            .setFooter("Powered by JokeAPI - https://jokeapi.dev ")
        message.channel.send(embed);

    }
}
