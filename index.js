require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const token = process.env['BOT_TOKEN']


client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');

   client.on("message", message => {
      if (message.content === "!ping") {
        message.channel.send("Vive les poules !")
      }
    })

});

client.login(token);

