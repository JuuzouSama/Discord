const functions = require("../functions.js");
exports.run = function(bot, msg) {
  let member = msg.mentions.members.first();
  if(!member) return functions.embed(msg, 0xff0000, "Invalid user mention!", "Please mention a user to ban!");
  member.ban(2);
  functions.embed(msg, 0xff0000, "Successfully banned user!", `${member.user.tag} (${member.user.id})`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bans mentioned user!',
  usage: 'ban <mention>'
};
