async function animate(){
    message = (arguments[0])
    const sentMessage = await message.channel.send(arguments[1]);
    for (let i=2; i < arguments.length; i++) {
            await sentMessage.edit(arguments[i]);
            }

}
function flip(){
    x = Math.floor(Math.random() * 2) == 0;
    if(x){
    	return "heads";
    }else{
        return "tails";
    }
}
module.exports = {
	name: 'coinflip',
	description: 'coinflip',
	async execute(message, args, client) {
            await animate(message,"-", "|\n.", "-")
            message.channel.send(`Landed on **${flip()}**`)
    }}