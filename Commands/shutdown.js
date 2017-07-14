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
    async function removeRoles() {
    try {
      let role = await msg.guild.roles.find("name", "Hexus-Mute");
      if(!role) return msg.reply(":no_entry: `ERROR` I couldn't find a role by the name of `Hexus-Mute`");
      msg.channel.send(":tools: Removing all mutes, and preparing to shutdown!");
      for(let member in msg.guild.members) {
        member.removeRole(role.id);
      }
      embed(0xff0000, "Shutdown Sequence Activated!", "Hexusbot discord instance termination, complete...");
      setTimeout(() => {
        bot.destroy().catch(console.error);
      }, 5000);
    } catch(e) {
      console.error(e);
    }
  }
  removeRoles();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'shutdown',
  description: 'Removes all mutes, and shutsdown hexusbot!',
  usage: `shutdown`
};
