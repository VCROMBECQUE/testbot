require('dotenv').config({path: __dirname + '/.env'})

const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env['BOT_TOKEN']

client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(token);

// bot.on('message', message => {
//     if (message.content === 'ping') {
//       message.reply('pong !')
//     }
//   })