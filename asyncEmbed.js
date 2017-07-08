//An embed function to clean up your code with style.
async function embed(c, t, d) {
  try {
    await msg.channel.send("", {embed: {
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
