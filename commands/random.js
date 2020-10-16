function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function generateRandomBigInt(lowBigInt, highBigInt) {
    if (lowBigInt >= highBigInt) {
      throw new Error('lowBigInt must be smaller than highBigInt');
    }
  
    const difference = highBigInt - lowBigInt;
    const differenceLength = difference.toString().length;
    let multiplier = '';
    while (multiplier.length < differenceLength) {
      multiplier += Math.random()
        .toString()
        .split('.')[1];
    }
    multiplier = multiplier.slice(0, differenceLength);
    const divisor = '1' + '0'.repeat(differenceLength);
  
    const randomDifference = (difference * BigInt(multiplier)) / BigInt(divisor);
  
    return lowBigInt + randomDifference;
  }
  

module.exports = {
	name: 'random',
	description: "Picks a random num",
     execute(message, args, client) {
        if(isNaN(args[0]) || isNaN(args[1])){
            message.channel.send("`typeof NaN;` -> 'number'")
        }
        else if(args[0] > Number.MAX_SAFE_INTEGER || args[1] > Number.MAX_SAFE_INTEGER){
            message.channel.send("No buffer overflow, only stackoverflow.")
        }
        else if(args.length == 2){
            message.channel.send(getRandomNum(args[0], args[1]))
        }
        else{
            message.channel.send("Use : ,random [min] [max]")
        }
    }
}