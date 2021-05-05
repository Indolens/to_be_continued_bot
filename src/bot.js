require("dotenv").config();

const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()=> {
    console.log('Oh yeah baby, ready to Rock and Roll!');
});

client.login(process.env.TBC_BOT_TOKEN)

client.on('message', async message => {
    if (message.content === '-itstime') {
        
        if(message.member.voice.channel) {

            message.channel.send('MUDA MUDA, ' + message.member.user.username + '. ZA WARUDO!');
            const connection = await message.member.voice.channel.join();
            
            const channel = message.member.voice.channel;
            const userToKick = channel.members.random();
            // for(const [memberID, member] of channel.members)

            //console.log(message.member.voice.channel.members);
            const dispatcher = connection.play(fs.createReadStream('tbc.webm'), {type: 'webm/opus'});
            dispatcher.on('start', () => {
                setTimeout(() => {
                    // message.member.voice.setChannel(null);
                    userToKick.voice.setChannel(null);
                }, 3540);
            })
            dispatcher.on('finish', () => {
                console.log('Finished Playing');
                connection.disconnect();
            })
            // connection.disconnect();
        } else {
            message.reply('you forgot to join a voice channel :sweat_smile:');
        }

       
    }
})

