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
      await msg.guild.channels.get(id).send("", {embed: {
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
      await msg.guild.members.get(userid).send("", {embed: {
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
  embedGID: async function(bot, msg, channelid, colour, title, description) {
    try {
      await bot.channels.get(channelid).send("", {embed: {
        author: {name: msg.author.tag, iconURL: msg.author.displayAvatarURL},
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
      }});
    } catch(e) {
      console.error(e);
    }
  }
};
