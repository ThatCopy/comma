var choices = ["rock", "paper", "scissors"];
var map = {};

choices.forEach(function(choice, i) {
    map[choice] = {};
    map[choice][choice] = "Was a tie"
    map[choice][choices[(i+1)%3]] = choices[(i+1)%3] + " wins"
    map[choice][choices[(i+2)%3]] = choice + " wins"
})

function compare(choice1, choice2) {
    return (map[choice1] || {})[choice2] || "Invalid choice";
}

async function animate(){
    message = (arguments[0])
    const sentMessage = await message.channel.send(arguments[1]); 
    for (let i=2; i < arguments.length; i++) {
            await sentMessage.edit(arguments[i]);
            }

}
function rock(a, m) {
    x = Math.ceil(Math.random()*3)
    if(x == 1){message.channel.send("Rock"); return compare(a[0].toString().toLowerCase(), "rock")}
    else if(x == 2) {message.channel.send("Paper"); return compare(a[0].toString().toLowerCase(), "paper")}
    else {message.channel.send("Scissors"); return compare(a[0].toString().toLowerCase(), "scissors")}
}

module.exports = {
	name: 'game',
	description: 'rock paper scissors',
	async execute(message, args, client) {
        await animate(message, "\\/", "[]", "{}")
        message.channel.send(rock(args, message))
    }}