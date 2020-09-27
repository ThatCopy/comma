function someTime(props){
    let times = [`in ${props} days.`, `in ${props} weeks`, `in ${props} hours`, `in ${props} millennia`]
    let Rnum = Math.floor(Math.random() * 4)
    return times[Rnum]
}

module.exports = {
	name: 'when',
	description: 'When will something happen',
     execute(message, args, client) {
        if(args.length){
            message.channel.send(`${args.join(" ")} will happen ${someTime(Math.floor(Math.random() * 22) + 2)} `)
        }
        else{
            message.channel.send("Use : ,when [something]")
        }
    }
}