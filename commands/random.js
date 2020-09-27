function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

module.exports = {
	name: 'random',
	description: "Picks a random num",
     execute(message, args, client) {
        message.channel.send(getRandomNum(args[0], args[1]))
    }
}