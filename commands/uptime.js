const moment = require("moment");
require("moment-duration-format");
module.exports = {
	name: 'uptime',
	description: 'Get the uptime of the bot.',
	execute(message, args, client) {
        const uptime = moment.duration(client.uptime).format("[comma's uptime is] D [days], H [hours], m [minutes], s [seconds]");
        message.reply(uptime);
    }}