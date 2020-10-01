module.exports = {
	name: 'mute',
	description: 'Get a cat photo',
	async execute(message, args, client) { 
        if(message.member.voice.channel == null){
            message.channel.send("You need to be connected to a channel.")
        }
        else if(!message.guild.me.hasPermission("MUTE_MEMBERS")){
            message.channel.send("I dont have persmitions to do that. Re-invite me https://thatcopy.pw/comma")
        }
        else if(message.member.hasPermission("MUTE_MEMBERS")){
            let channel = message.member.voice.channel;
            for (let member of channel.members) {
                await member[1].voice.setMute(true)
            }
        }
        else{
            message.channel.send("No.")
        }
    }
}