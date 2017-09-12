const settings = require('../settings.json');
exports.run = (bot, msg, args) => {
  if (!args[0]) {
    const commandNames = Array.from(bot.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    msg.edit(`[Selfbot Commands]\n\n[Use ${settings.prefix}help <command> for information!]\n\n${bot.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code: 'ini'});
  } else {
    let command = args[0];
    if (bot.commands.has(command)) {
      command = bot.commands.get(command);
      msg.edit("", {embed: {
        color: 0x22ca59,
            title: `Command Help:`,
            description: `Command Name: \`${command.help.name}\` \nDescription: ${command.help.description}\nUsage: ${settings.prefix}${command.help.usage}`,
          }});
    } else {
      msg.edit("", {embed: {
        color: 0x22ca59,
            title: `Non-Existant Command!`,
            description: `I was unable to find a command by the name of: \`${args[0]}\``,
          }});
    }
  }
};

exports.conf = {
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays available commands.',
  usage: 'help <command>'
};
