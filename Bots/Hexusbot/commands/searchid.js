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
  var id = args.join(" ");
  if(!id) return embed(0xff0000, "No Id Provided!", "Please include an id for me to search for!");
  var result = msg.guild.members.filter(u => u.id === id).map(u => u.toString()).join(" | ");
  if (result.size === 0) return embed(0xff0000, "No Results Found!", "I was unable to find any results for that id!");
  embed(0xff0000, "Successfully Searched Guild!", `${result}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'searchid',
  description: 'searches the guild for this id',
  usage: 'searchuser <ID>'
};
