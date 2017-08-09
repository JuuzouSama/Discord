const functions = require("../functions.js");
exports.run = function(bot, msg) {
  let member = msg.mentions.members.first();
  if(!member) return functions.embed(msg, 0xff0000, "Invalid user mention!", "Please mention a user to ban!");
  if(msg.author.id === member.id) return msg.reply(":no_entry: `ERROR` Why are you trying to ban yourself?");
  if(msg.member.highestRole.position <= member.highestRole.position) return msg.reply("You cannot ban them as their role is higher or equal to yours!");
  if(msg.guild.member(bot.user).highestRole.position <= member.highestRole.position) return msg.reply("You cannot ban them as their role is higher or equal to mine!");
  member.ban(2);
  functions.embed(msg, 0xff0000, "Successfully banned user!", `${member.user.tag} (${member.user.id})`);
  functions.embedID(msg, "314546622426120202", 0xff0000, "A ban has just occured!", `${member.user.tag} (${member.user.id})`);
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
