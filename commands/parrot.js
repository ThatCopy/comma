const parrots = require("../parrots")

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = {
    name: "parrot",
    description: "Sends a random party parrot",
    execute(message, args, client) {
        message.channel.send(random(parrots[1]))
    }
} 