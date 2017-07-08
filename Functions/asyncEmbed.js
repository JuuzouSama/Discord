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
