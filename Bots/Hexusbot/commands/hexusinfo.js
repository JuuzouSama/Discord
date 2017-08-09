exports.run = function(bot, msg) {
  msg.reply(":satellite: I have messaged you information about Hexus!");
  msg.author.send("", {embed: {
    color: 0xff0000,
    author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL,
    },
      title: `Welcome To Hexus! - Owned By: \`<Charlie>#1062\` & \`Customality#5032\``,
      description: `Hexus now consists of unrestricted execution with smooth execution of any script your exploiting mind desires. At this moment we're just smoothing out a few problems with hexus, but it will soon be ready for full release!`,
      timestamp: new Date(),
  }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hexusinfo',
  description: 'Provides in-depth information about Hexus.',
  usage: 'hexusinfo'
};
