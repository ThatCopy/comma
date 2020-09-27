function getHello(){
    let hellos = ["Hello", "Hi", "Ahoj", "Hallo", "Guten Tag!", "Hola"]
    let Rnum = Math.floor(Math.random() * 5)
    return hellos[Rnum]
}

module.exports = {
	name: 'hello',
	description: "Hello",
     execute(message, args, client) {
        message.channel.send(getHello())        
    }
}