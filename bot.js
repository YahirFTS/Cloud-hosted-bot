const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {    
 console.on;('Bot is ready as ${Client.user.tag}');
});


Client.on('message', msg => {
    if (msg.content === 'Hola') {
      msg.reply('Hola owo!');
    }
  });
  
  Client.on('message', msg => {
      //Receiving the message
      console.log(msg.content);
    if (msg.content === 'Bien pisado') {
      msg.reply('Puto! 🤠');
    }
  });

  Client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'presentaciones');
    
    if (!channel) return;

    channel.send(`Bienvenido a la Cipher Smash League! 😃, ${member}`);
  });
  
  Client.on('message', msg => {
    if (msg.content === 'El diablo') {
      msg.reply('anda suelto, va pisando el mismo pavimento, recorriendo el barrio por completo igual y me la fleto si es que me lo topo.😈');
    }
  });
  Client.on('message', msg => {
    if (msg.content === ':v') {
      msg.reply('https://www.youtube.com/watch?v=49KNrluLZPw');
    }
  });

  Client.on('message', msg => {
    if (msg.content === 'Jokah') {
      msg.reply('https://www.youtube.com/watch?v=_NLXfPGS2Xg');
    }
  });
  Client.on('message', msg => {
    if (msg.content === 'Looking cool') {
      msg.reply('https://tcrf.net/images/f/f1/P5-finalren.png');
    }
  });
  Client.on('message', msg => {
    if (msg.content === 'Squipher opening') {
      msg.reply('https://www.youtube.com/watch?v=FaVWXVC5ISs');
    }
  });

;

Client.login(process.env.BOT_TONKEN);
