module.exports = {
  embed: async function(msg, colour, title, description) {
    try {
      await msg.channel.send("", {embed: {
        author: {name: msg.author.username, iconURL: msg.author.displayAvatarURL},
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
      }});
    } catch(e) {
    console.error(e);
    }
  },
  embedID: async function(msg, id, colour, title, description) {
    try {
      msg.guild.channels.get(id).send("", {embed: {
        author: {name: msg.author.username, iconURL: msg.author.displayAvatarURL},
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
      }});
    } catch(e) {
      console.error(e);
    }
  },
  memberAction: async function(msg, action) {
    try {
      if(action === "kick") {
        let member = await msg.mentions.members.first();
        if(!member) return msg.reply(":no_entry: `ERROR` Please mention a user to kick!");
        member.kick();
      } else if(action === "ban") {
        let member = await msg.mentions.members.first();
        if(!member) return msg.reply(":no_entry: `ERROR` Please mention a user to ban!");
        member.ban(2);
      } else {
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }
};
