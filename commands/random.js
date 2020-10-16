function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

module.exports = {
	name: 'random',
	description: "Picks a random num",
     execute(message, args, client) {
        if(isNaN(args[0]) || isNaN(args[1])){
            message.channel.send("`typeof NaN;` -> 'number'")
        }
        else if(args[0] > 1000000000 || args[1] > 1000000000 || args[0] < -1000000000 || args[0] < -1000000000){
            message.channel.send("No buffer overflow, only stackoverflow.")
        }
        else if(args.length == 2){
            message.channel.send(getRandomNum(args[0], args[1]))
        }
        else{
            message.channel.send("Use : ,random [min] [max]")
        }
    }
}