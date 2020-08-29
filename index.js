const Discord = require('discord.js');
const dotenv = require('dotenv');
const { prefix } = require('./config.json');

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

dotenv.config();
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

function makeDate(author){
    return`${author.createdAt.getDate()}.${author.createdAt.getMonth()}.${author.createdAt.getFullYear()}` //nice code
}

client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('pong');
    }else if (message.content.startsWith(`${prefix}user`)) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#16a085')
            .setTitle('User info')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: "Username : ", value: message.author.username},
                { name: 'Your ID : ', value: message.author.id },
                { name: 'Account created on : ', value: makeDate(message.author), inline: true },
                { name: 'Inline field title', value: message.author.createdTimestamp, inline: true },
            )
        message.channel.send(exampleEmbed);
    }
});

client.login(process.env.TOKEN);
