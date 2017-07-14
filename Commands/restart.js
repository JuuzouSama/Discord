exports.run = async function(bot, msg, args) {
  async function embed(colour, title, description) {
    try {
    await msg.channel.send("", {embed: {
      author: {
        name: msg.author.username,
        icon_url: msg.author.avatarURL,
      },
      color: colour,
      title: title,
      description: description,
      timestamp: new Date(),
    }});
    } catch(e) {
    console.error(e);
    }
  };
  embed(0xff0000, "Restarting main bot file!", "Now processing...").then(() => {process.exit(1)});
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
