require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()=> {
    console.log('Oh yeah baby, ready to Rock and Roll!');
});

client.login(process.env.TBC_BOT_TOKEN)