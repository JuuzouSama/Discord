module.exports = {
  embed: async function(msg, colour, title, description) {
    try {
      await msg.channel.send("", {embed: {
        author: {name: msg.author.tag, iconURL: msg.author.displayAvatarURL},
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
        author: {name: msg.author.tag, iconURL: msg.author.displayAvatarURL},
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
      }});
    } catch(e) {
      console.error(e);
    }
  },
  embedDM: async function(msg, userid, colour, title, description) {
    try {
      msg.guild.members.get(userid).send("", {embed: {
        author: {name: msg.tag, iconURL: msg.author.displayAvatarURL},
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
        if(!member) return embed(0xff0000, "Invalid member mention!", "Please mention a member to kick!");
        if(msg.member.highestRole.position <= member.highestRole.position)
          return embed(0xff0000, "Invalid Permissions!", "That user has a higher role then you or their highest role is equal to yours!");
        if(msg.guild.member(bot.user).highestRole.position <= member.highestRole.position)
          return embed(0xff0000, "Invalid Permissions!", "That user has a higher role then I do, or their highest role is equal to mine!");
        await member.kick();
        embed(0xff0000, "Successfully Kicked User!", `User: ${user.tag} (${user.id})`);
      } else if(action === "ban") {
        let member = await msg.mentions.members.first();
        if(!member) return embed(0xff0000, "Invalid member mention!", "Please mention a member to kick!");
        if(msg.member.highestRole.position <= member.highestRole.position)
          return embed(0xff0000, "Invalid Permissions!", "That user has a higher role then you or their highest role is equal to yours!");
        if(msg.guild.member(bot.user).highestRole.position <= member.highestRole.position)
          return embed(0xff0000, "Invalid Permissions!", "That user has a higher role then I do, or their highest role is equal to mine!");
        await member.ban(2);
        embed(0xff0000, "Successfully Banned User!", `User: ${user.tag} (${user.id})`);
      } else {
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }
};
