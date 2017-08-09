const ms = require("ms");
const func = require("../functions.js");
exports.run = async function(bot, msg, args) {
  try {
    let member = await msg.mentions.members.first();
    if(!member) return func.embed(msg, 0xff0000, "Invalid member mention!", "Please mention a member to mute!");
    let time = args[1];
    if(!time) return func.embed(msg, 0xff0000, "Invalid Time Specification", "Please specify an amount of time to mute for!");
    let reason = args.slice(2).join(" ");
    if(!reason) return func.embed(msg, 0xff0000, "No Reason Specified!", "Please specify a reason for this mute!");
    let mute = await msg.guild.roles.find("name", "Hexus-Mute");
    if(!mute) return func.embed(msg, 0xff0000, "Error Occured", "I couldn't find the `Hexus-Mute` role!");

    if(member.roles.has(mute.id)) {
      return msg.reply(":no_entry: `ERROR` That member has already been muted!");
    } else {
    member.addRole(mute.id);
    func.embed(msg, 0xff0000, "Successfully Muted!", `Muted: ${member.user.tag} \nID: ${member.id} \nTime: ${ms(ms(time), {long: true})} \nReason: ${reason}`);
    func.embedID(msg, "314546622426120202", 0xff0000, "A user has been muted!", `Muted: ${member.user.tag} \nID: ${member.id} \nTime: ${ms(ms(time), {long: true})} \nReason: ${reason}`);
    }
    setTimeout(function() {
      member.removeRole(mute.id);
      func.embed(msg, 0xff0000, "Successfully Unmuted!", `Unmuted: ${member.user.tag} \nID: ${member.id} \nTime: ${ms(ms(time), {long: true})} \nReason: ${reason}`);
    }, ms(time));

    } catch(e) {
    func.embed(msg, 0xff0000, "`FATAL ERROR` Please contact Charlie#1062", `\`\`\`${e.stack}\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Mutes user for specific time!',
  usage: 'mute <mention> <time> <reason>'
};