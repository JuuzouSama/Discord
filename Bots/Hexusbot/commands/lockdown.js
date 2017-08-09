const ms = require("ms");
exports.run = function(bot, msg, args) {
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
  let action = args.join(" ");
  if(!action) return embed(0xff0000, "Invalid Lockdown Choice!", "Please specify either `on` or `off` with your lockdown command!");
  let time = args.slice(1).join(" ");
  if(action.includes("on")) {
    if(!time) return embed(0xff0000, "Invalid Time Specification!", "Please specify a time to lockdown the channel for!");
    msg.channel.overwritePermissions(msg.guild.id, {SEND_MESSAGES: false});
    embed(0xff0000, "Successfully Locked Channel!", `Channel locked for ${ms(ms(time), { long:true })}`);
    setTimeout(function() {
      embed(0xff0000, "Successfully Unlocked Channel!", "You may now speak!");
      msg.channel.overwritePermissions(msg.guild.id, {SEND_MESSAGES: true});
    }, ms(time));
  } else if(action.includes("off")) {
    msg.channel.overwritePermissions(msg.guild.id, {SEND_MESSAGES: true});
    embed(0xff0000, "Successfully Unlocked Channel!", "I stopped the timer early, you may speak!");
  } else {
    embed(0xff0000, "Invalid Lockdown Choice!", "Please specify either `on` or `off` with your lockdown command!");
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 2
};
exports.help = {
  name: 'lockdown',
  description: 'Locks down channel from typing!',
  usage: 'lockdown <time>'
};
