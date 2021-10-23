const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path');
client.login('YOUR TOKEN')
const express = require('express');
const app = express();
let port = 2990


app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(port)

client.on('message', message => {
    const prefix = 'na!';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    var argsf = String(args);

    if (cmd === 'YOUR COMMAND') {
        let embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('title')
            .setURL('')
            .setDescription('description')
            .addFields(
                { name: 'title', value: 'value', inline: false },
            )
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp('timestamp')
            .setFooter('footer', 'https://i.imgur.com/wSTFkRM.png');
        
            message.channel.send(embed);
    }
    
});    
