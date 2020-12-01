const leetLUT = require("../leetLUT")

function leetify(str) {
    let leetWord = str;
    for(const e of leetLUT) {
        leetWord = leetWord.replace(e[0], e[1])
    }
    return leetWord
}

function cleanUp(str) {
    return str.replace("@", "no")
}

module.exports = {
	name: 'leet',
	description: 'leetifies your message',
	async execute(message, args, client) {
        if(!args.length) {message.channel.send("Provide text to leetify"); return}
        message.channel.send(leetify(cleanUp(args.join(" "))))
    }
}