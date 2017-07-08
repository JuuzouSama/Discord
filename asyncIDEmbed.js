//Send an embed to a specific channel via provided parameter.
async function embed(id, colour, title, description) {
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
};
