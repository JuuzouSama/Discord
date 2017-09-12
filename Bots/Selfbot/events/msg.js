const settings = require('../settings.json');
const embed = require("../embed.js");
module.exports = msg => {
  let bot = msg.client;
  if(msg.author.bot) return;
  if(msg.author.id !== bot.user.id) return;
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
    if (perms < cmd.conf.permLevel) return msg.channel.send("", {embed: {
          color: 0xffffff,
          title: `Incorrect Permission Level!`,
          description: `Command Permission Level: \`[${cmd.conf.permLevel}]\` \nYour Permission Level: \`[${parseInt(perms)}]\``,
        }});
    cmd.run(bot, msg, args, perms);
  }
};
