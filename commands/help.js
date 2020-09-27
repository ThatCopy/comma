const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args, client) {
        message.react('✅');
        let embed = new Discord.MessageEmbed()
            .setColor("#0000ff")
            .setTitle("Help")
            .setDescription("*? means a flag is optional.*\n\n**Commands:**")
            .addFields(
                {name: "🎮 Fun / Games \n\n,coinflip", value: "Flips a coin."},
                {name: ",dice", value: "Rolls a dice (D6)"},
                {name: ",when [something]", value: "Tells you when something will happen"},
                {name: ",8ball", value: "8ball"},
                {name: ",random [min] [max]", value: "Replies with a number between min and max."},
                {name: ",hello", value: "Hello! 👋"},
                {name: ",joke ?[category]", value: "Tells you a joke.\nCategories : (pun, programming, miscellaneous or dark)"},
                {name: ",meme", value: "Replies with a meme"},
                {name: ",game [rock or paper or scissors]", value: "Rock paper scissors"},
                {name: ",cat", value: "Get a random cat photo"},
                {name: "\n🔷 Other commands \n\n,ping", value:"Replies with ping to comma."},
                {name: ",uptime", value: "Shows the uptime of comma"},
                {name: ",user", value: "Gets info about you."},
                {name: "\n🤖 Mod commands\n\n,del [number of messages]", value: "Deletes messages. Max 99."}
            )
            message.channel.send(embed);
    }}
