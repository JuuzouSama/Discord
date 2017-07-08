async function embed(id, c, t, d) {
  try {
    msg.guild.channels.get(id).send("", {embed: {
      author: {name: msg.author.username, iconURL: msg.author.displayAvatarURL},
      color: c,
      title: t,
      description: c,
      timestamp: new Date(),
    }});
  } catch(e) {
    console.error(e);
  }
};
