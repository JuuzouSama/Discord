exports.run = function(bot, msg) {
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
  if(!msg.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return msg.reply(":no_entry: `ERROR` I don't have the correct permissions to mute people! \nMissing permission: `MANAGE_ROLES_OR_PERMISSIONS`");
  let user = msg.mentions.users.first();
  if(!user) return msg.reply(":no_entry: `ERROR` No user was mentioned, please mention a user to unmute!");
  let muteName = "Hexus-Mute";
  let mute = msg.guild.roles.find(r => r.name.toLowerCase() === muteName.toLowerCase());
  if(!mute) return msg.reply(":no_entry: `ERROR` I couldn't find a role by the name of `Hexus-Mute`")
  msg.guild.fetchMember(user).then(m => m.removeRole(mute));
  embed(0xff0000, "Successfully Unmuted User!", `Unmuted: ${user.username}#${user.discriminator}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  description: 'Unmutes the mentioned user!',
  usage: 'unmute <mention>'
};
