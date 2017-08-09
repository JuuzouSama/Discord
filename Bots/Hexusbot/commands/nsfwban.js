exports.run = async function(bot, msg) {
    try {
        let mention = await msg.mentions.members.first();
        if(!mention) return msg.reply("Please mention a user to NSFW ban");
        let role = await msg.guild.roles.find("name", "NSFW-Ban");
        if(!role) return msg.reply("I'm unable to find the role `NSFW-Ban");
        mention.addRole(role.id);
        msg.reply(`Successfully NSFW banned ${mention.user.tag}!`);
    } catch(e) {
        msg.channel.send(`\`\`\`${e.stack}\`\`\``);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'nsfwban',
  description: 'Bans mentioned user from NSFW',
  usage: 'nsfwban <mention>'
};