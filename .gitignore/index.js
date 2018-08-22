{
const.discord = require('discord.js')
const bot = new discord.Client();

var prefix = ("°")

bot.on('ready', function() {
  bot.user.setGame("Command: °help");
  console.log("Connected");
});

bot.login("NDgxNTA5ODUwODQ5NzM4NzYy.Dl8NRw.IA9ghT24yvAajHEVH7XvToPinmM");

bot.on('message', message => {
  if (message.content === prefix + "help"){
    message.channel.sendMessage("Liste des commandes: \n -°help");
  }

  if (message.content === "salut"){
    message.reply("Bien le bonjour. :)");
    console.log("commande salut effectué");
  });
