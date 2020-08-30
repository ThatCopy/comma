async function animate(){
    message = (arguments[0])
    const sentMessage = await message.channel.send(arguments[1]);
    for (let i=2; i < arguments.length; i++) {
            await sentMessage.edit(arguments[i]);
            }

}
function rollDice() {
    return Math.ceil(Math.random()*6)
}

module.exports = {
	name: 'dice',
	description: 'roll a dice',
	async execute(message, args, client) {
        await animate(message, "[ . ]", "[ : ]", "[ ; ]")
        message.channel.send(`Landed on **${rollDice()}**`)
    }}