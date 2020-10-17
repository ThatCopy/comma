const owo = require('owofy')

module.exports = {
	name: 'owo',
	description: 'owofys your message',
	execute(message, args, client) {
		if(args.length){
			let text = args.join(" ")
			let cleanText = text.replace("@", " ")
			let owoText = owo(cleanText)
			message.channel.send(`${owoText}`)
		} else {
			message.channel.send("Usage : ,owo [text]")
		}
}}