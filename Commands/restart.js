exports.run = async function(bot, msg) {
  msg.reply("Now restarting my bot file!").then(() => {process.exit(1)});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  description: 'Restart the bot!',
  usage: 'restart <yes/no>'
};
