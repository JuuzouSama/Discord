function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
const settings = require("../hb.json")
exports.run = function(bot, msg, args) {
  try {
   var code = args.join(" ");

    var evaled = eval(code);
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    msg.channel.send("", {embed: {
      color: 0xff0000,
      fields: [
        {
          name: `Javascript Evaluated`,
          value: `**INPUT** :arrow_forward:\n\`\`\`javascript\n${code}\n\`\`\`\n**OUTPUT** :white_check_mark:\n\`\`\`javascript\n` + clean(evaled) + `\n\`\`\``,
        }
      ],
      timestamp: new Date(),
    }});
  } catch(err) {
    msg.channel.send("", {embed: {
      color: 0xff0000,
      fields: [
        {
          name: `Javascript Evaluated`,
          value: `**INPUT** :arrow_forward:\n\`\`\`javascript\n${code}\n\`\`\`\n**ERROR** :x:\n\`\`\`javascript\n${clean(err)}\n\`\`\``,
        }
      ],
      timestamp: new Date(),
    }});
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'eval',
  description: 'Evaluates and executes javascript.',
  usage: 'eval <code>'
};
