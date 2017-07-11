const ms = require("ms");
exports.run = function(bot, msg, args) {
  //Variables / Checks:
  //Checks for our mentioned member!
  let member = msg.mentions.members.first();
  if(!member) return msg.reply("Invalid Member Mention, please mention a user to mute!");
  //Checks and finds a role by your choosing, i've decided to look for a role called Muted
  let muteRole = msg.guild.roles.find("name", "Muted");
  if(!muteRole) return msg.reply("I couldn't find a mute role by the name of `Muted`");
  //Checks if you have added an amount of time to the mute arguments!
  let time = args.join(" ");
  if(!time) return msg.reply("Please specify a time to mute for!");
  //Checks if you have supplied a reason to the arguments!
  let reason = args.slice(1).join(" ");
  if(!reason) return msg.reply("Please provide a reason for this mute!");

  //Gives mentioned user the mute role!
  member.addRole(muteRole.id);
  msg.reply(`Successfully muted ${member.user.username}`);
  //Using a setTimeout function, we're going to remove the muted role after the specified time!
  setTimeout(function() {
    member.removeRole(muteRole.id);
    msg.reply(`Successfully unmuted ${member.user.username}`);
  }, ms(time));
}

//Latest Discord.js Update <3
//Example by Charlie#1062
