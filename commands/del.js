module.exports = {
	name: 'del',
	description: 'deletes messages if you have permissions',
	execute(message, args) {
        if(isNaN(parseInt(args[0]))){
            message.react('❌')
            message.channel.send("Wrong syntax. Syntax: `,rm [number]`")
        }else if(parseInt(args[0]) >= 100){
            message.react('❌')
            message.channel.send("You can delete only 99 messages at a time.")
        }
        else{
            message.react('✅')
            console.log(typeof(parseInt(args[0])))
            setTimeout(function(){ message.channel.bulkDelete((parseInt(args[0]) + 1))}, 1000);
        }
}};