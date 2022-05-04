const Discord = require('discord.js');
const client = new Discord.Client();
const token = "OTcxNTM2OTE3MjczMzg3MDA4.YnL8Qw.1JqvXXSXvEr-ZasblKfw5GQ2aFk"

client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(token);

// bot.on('message', message => {
//     if (message.content === 'ping') {
//       message.reply('pong !')
//     }
//   })