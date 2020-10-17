const owo = require('owofy')

module.exports = {
	name: 'owo',
	description: 'owofys your message',
	execute(message, args, client) {
        let text = args.join(" ")
        let cleanText = text.replace("@", " ")
        let owoText = owo(cleanText)
        message.channel.send(`${owoText}`)
}}