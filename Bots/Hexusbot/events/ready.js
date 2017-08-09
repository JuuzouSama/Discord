const ms = require("ms");
module.exports = bot => {
  let date = new Date();
  console.log(`My bot process is ready, let's begin.`);
  bot.user.setGame("with code!");
};
