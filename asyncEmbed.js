//An embed function to clean up your code with style.
async function embed(colour, title, description) {
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
};
