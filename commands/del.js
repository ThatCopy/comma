module.exports = {
	name: 'del',
	description: 'deletes messages if you have permissions',
	execute(message, args, client) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send("You do not have permissions to do that.")
        }
        else if(isNaN(parseInt(args[0]))){
            message.react('❌')
            message.channel.send("Wrong syntax. Syntax: `,rm [number]`")
        }else if(parseInt(args[0]) >= 100){
            message.react('❌')
            message.channel.send("You can delete only 99 messages at a time.")
        }
        else{
            message.channel.bulkDelete((parseInt(args[0]) + 1))
            .catch((err) => {
                message.react('❌')
                message.channel.send("Error : " + err)
            })
        }
}};