const functions = require("../functions.js");
exports.run = function(bot, msg) {
  let member = msg.mentions.members.first();
  if(!member) return functions.embed(msg, 0xff0000, "Invalid user mention!", "Please mention a user to kick!");
  if(msg.author.id === member.id) return msg.reply(":no_entry: `ERROR` Why are you trying to kick yourself?");
  if(msg.member.highestRole.position <= member.highestRole.position) return msg.reply("You cannot kick them as their role is higher or equal to yours!");
  if(msg.guild.member(bot.user).highestRole.position <= member.highestRole.position) return msg.reply("You cannot ban them as their role is higher or equal to mine!");
  member.kick();
  functions.embed(msg, 0xff0000, "Successfully kicked user!", `${member.user.tag} (${member.user.id})`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks mentioned user!',
  usage: 'kick <mention>'
};
