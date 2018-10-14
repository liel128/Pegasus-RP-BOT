const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTAxMDc4ODYxMjc5Mzk1ODQx.DqUK8Q.gMm1BHE5DOm35FG4hW4ek2f8J80'; // Token goes here.

client.login(token); // login the bot with your token.

client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

	if(message.content.toLowerCase() === 'מתי השרת נפתח?')
		message.channel.send("בקרוב");
    
	else if(message.content.toLowerCase() === 'ip')
	message.channel.send("בקרוב");
    
});
