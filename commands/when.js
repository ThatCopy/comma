const Discord = require('discord.js');
function someTime(props){
    let times = [`in ${props} days.`, `in ${props} weeks`, `in ${props} hours`, `in ${props} millennia`]
    let Rnum = Math.floor(Math.random() * 3)
    return times[Rnum]
}

module.exports = {
	name: 'when',
	description: 'When will something happen',
     execute(message, args, client) {
        message.channel.send(`${args} will happen ${someTime(Math.floor(Math.random() * 22) + 2)} `)
    }
}