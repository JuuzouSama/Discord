const settings = require("../hb.json");
exports.run = function(bot, msg, args) {
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
  let command;
  if (bot.commands.has(args[0])) {
    command = args[0];
  } else if (bot.aliases.has(args[0])) {
    command = bot.aliases.get(args[0]);
  }
  if (!command) {
    return embed(0xff0000, "No existant command!", `I was unable to find any results for \`${args[0]}\`!`);
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
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Reload a command file.',
  usage: 'reload <commandname>'
};
