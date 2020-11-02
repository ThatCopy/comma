const parrots = require("../parrots")
let msg = []
module.exports = {
    name: "parrot-wave",
    description: "Parrot wave weeeeeeeeee",
    execute(message, args, client) {
        for (let i = 0; i < parrots.length; i++) {
            msg.push(parrots[i])
        }
        message.channel.send(msg[0].join(""))
    }
}