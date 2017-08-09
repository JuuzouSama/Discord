const embed = require("../functions.js");
exports.run = function(bot, msg) { 
    let role = msg.guild.roles.find("name", "Buyers");
    if(!role) return msg.reply("I cannot find a role by the name of `Buyers`");
    let member = msg.mentions.members.first();
    if(!member) return msg.reply(":no_entry: `ERROR` Please mention a member to give buyer!");
    if(member.roles.has(role.id)) {
        return msg.reply(":no_entry: `ERROR` That user already has the buyer role!");
    } else {
    member.addRole(role.id);
    embed.embed(msg, 0xff0000, "Successfully given user buyer role!", `Given to: ${member.user.tag} \nTime: ${new Date()}`);
    embed.embedGID(bot, msg, "342777457939709964", 0xff0000, "User has been given a buyer role!", `Given to: ${member.user.tag} \nTime: ${new Date()}`);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'buyer',
    description: 'Gives buyer to mentioned user!',
    usage: 'buyer <user>'
};
