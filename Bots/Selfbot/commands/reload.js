const settings = require("../settings.json");
exports.run = (bot, msg, args) => {
  let command;
  if (bot.commands.has(args[0])) {
    command = args[0];
  } else if (bot.aliases.has(args[0])) {
    command = bot.aliases.get(args[0]);
  }
  if (!command) {
    return msg.channel.send("", {embed: {
          color: 0x22ca59,
          title: `Non-Existant Command!`,
          description: `I was unable to find a command by the name of: \`${args[0]}\``,
        }});
  } else {
    msg.channel.send(`:file_folder: Loading desired command!`)
      .then(m => {
        bot.reload(command)
          .then(() => {
            m.edit(`:open_file_folder: Successfully reloaded \`${command}\``);
          })
          .catch(e => {
            m.edit(`:no_entry_sign: Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 0
};

exports.help = {
  name: 'reload',
  description: 'Reload a command file.',
  usage: 'reload <commandname>'
};
