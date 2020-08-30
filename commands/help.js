const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args, client) {
        message.react('✅');
        const embed = new Discord.MessageEmbed()
            .setColor("#0000ff")
            .setTitle("Help")
            .setDescription("*? means a flag is optional.*\n\n**Commands:**")
            .addFields(
                {name: "🎮 Fun / Games \n\n,coinflip", value: "Flips a coin."},
                {name: ",dice", value: "Rolls a dice (D6)"},
                {name: ",joke ?[category]", value: "Tells you a joke.\nCategories : (pun, programming, miscellaneous or dark)"},
                {name: ",meme", value: "Replies with a meme"},
                {name: "\n🔷 Other commands \n\n,ping", value:"Replies with ping to comma."},
                {name: ",uptime", value: "Shows the uptime of comma"},
                {name: ",user", value: "Gets info about you."},
                {name: ",wiki ?[term]", value: "Replies with the wikipedia article of a term.\nIf you need to specify a term, use a \"-\" as a space. e.g: ,wiki apple-(fruit)"},
                {name: "\n🤖 Mod commands\n\n,del [number of messages]", value: "Deletes messages."}
            )
            message.channel.send(embed);
    }}