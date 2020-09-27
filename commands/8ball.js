let balls = ["Yes", "Maybe", "No", "I dont know", "I think not", "Uhhh", "cat"] //cat
function ball(){
    let Rnum = Math.floor(Math.random() * 7)
    return balls[Rnum]
}

module.exports = {
	name: '8ball',
	description: "8ball",
     execute(message, args, client) {
        message.channel.send(ball())
    }
}