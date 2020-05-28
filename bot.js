const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.token);

client.on("ready", () => {
  console.log(`Bot foi iniciado.`);
})

/*client.on('message', async message => {

  if(message.content.startsWith('Bom dia')){
    message.channel.send('Bom dia, não se esqueça de marcar o ponto no link https://portalerp.apps.cloud.poupex/home/statustrabalho')
  }

});*/

client.on('message', async message => {

  if (message.content.startsWith('!horas')) {
    data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    message.channel.send('São ' + hora + ' horas e ' + minuto + ' minutos e ' + segundo + ' segundos');
  }
  if (message.content.startsWith('!victor')) {
 
    message.channel.send('Bora pra aula Victor safado!!');
  }

});





