const settings = require('../hb.json');
module.exports = msg => {
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
  let bot = msg.client;
  if(msg.author.bot) return;
  if(msg.channel.type != "text") return;
  if (!msg.content.startsWith(settings.prefix)) return;
  let command = msg.content.toLowerCase().split(' ')[0].slice(settings.prefix.length);
  let args = msg.content.split(' ').slice(1);
  let perms = bot.elevation(msg);
  let cmd;
  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return embed(0xff0000, "Incorrect Permission Level!", `Command Permission Level: \`[${cmd.conf.permLevel}]\` \nYour Permission Level: \`[${parseInt(perms)}]\``);
    cmd.run(bot, msg, args, perms);
  }
};
