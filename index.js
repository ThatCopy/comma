const Discord = require('discord.js')
const dotenv = require('dotenv')
const { prefix } = require('./config.json')
const fs = require('fs')

dotenv.config()
const client = new Discord.Client()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
client.commands = new Discord.Collection()

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
}   

client.on('ready', () => {
    client.user.setStatus('online') 
    client.user.setActivity(`,help | on ${client.guilds.cache.size} servers`, { type: "WATCHING"}) 
    console.log('Ready!')
}) 

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot ) return
    const args = message.content.slice(prefix.length).trim().split(' ')
    const command = args.shift().toLowerCase()
    if (!client.commands.has(command)) return
    try {
        client.commands.get(command).execute(message, args, client)
    } catch (error) {
        console.error(error)
        message.reply('there was an error trying to execute that command!')
    }
})

client.login(process.env.TOKEN)