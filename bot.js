
const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//PING BOT
client.on('message', msg => {
  if (msg.content === '+ping') {
    msg.reply('Pong!');
  }
	
//HILFE
	if (msg.content === '+help') {
   const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Hilfe')
	.setAuthor('InstaGif')
	.setDescription('InstaGif Befehle (Stand 22.05.2021 v1.0)')
		.addFields(
		{ name: '\u200b', value: '\u200b'},
		{ name: 'Begrüßung und Verabschiedung:', value: '\u200b'},
		{ name: '+hi', value: 'So begrüßt man Leute.'},
		{ name: '+kuckuck', value: 'Sasha geht immer.' },
		{ name: '+glomp', value: 'Jeder mag Umarmungen.'},
		{ name: '+sleep', value: 'Gute Nacht.' },
		{ name: '--------------------------------', value: '\u200b'},
	)
		.addFields(	
		{ name: 'Saukram:', value: '\u200b'},
		{ name: '+subbe', value: 'Ekliger ossi Kram.'},
		{ name: '+pussy', value: 'Für intime Momente.'},
		{ name: '--------------------------------', value: '\u200b'},
	)	
		.addFields(		
		{ name: 'Interna:', value: '\u200b'},
		{ name: '+odie', value: 'Bisschen piesacken.'},
		{ name: '+lipa', value: 'Irgendeine olle.'},
		{ name: '--------------------------------', value: '\u200b'},
	)	
		.addFields(		
		{ name: 'Geselligkeit:', value: '\u200b'},
		{ name: '+bier', value: 'Schmeckt zusammen besser!'},
		{ name: '+pat', value: 'Lob tut gut.'},
		{ name: '+hug', value: 'Kleine Umarmung in ehren.'},
		{ name: '--------------------------------', value: '\u200b'},
	)	
		.addFields(		
		{ name: 'Gefühle:', value: '\u200b'},
		{ name: '+blush', value: 'Da wirste rot.'},
		{ name: '+headshot', value: 'Für besonders liebe Menschen.'},
		{ name: '+panic', value: 'Ruhe bewahren!'},
		{ name: '+boring', value: 'Wenn mal wieder nichts passiert.'},
		{ name: '--------------------------------', value: '\u200b'},
	)
		.addFields(	
		{ name: 'Mit Vorsicht genießen!', value: '\u200b'},
		{ name: '+everyone', value: 'Keiner mag dich wenn du es zu oft benutzt!'},
		{ name: '--------------------------------', value: '\u200b'},
	)

	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
	
//ODIE NERVEN
if (msg.content === '+odie') {
    msg.reply('Die olle Zimtzippe!');
  }
	
//BIER
	if (msg.content === '+bier') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Prost!')
	.setImage('https://media1.tenor.com/images/d79142054340c7d569a413424046c397/tenor.gif?itemid=12546881')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
	
//BLUSH
	if (msg.content === '+blush') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('blush')
	.setImage('https://media1.tenor.com/images/82b0f0a24e1621510b1216317edd4ba0/tenor.gif?itemid=14119517')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
	
//SLEEP
	if (msg.content === '+sleep') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Gute Nacht')
	.setImage('https://media1.tenor.com/images/7dde13a8c3c8b34d3ca7dff0c3576394/tenor.gif?itemid=5374010')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//LIPA
	if (msg.content === '+lipa') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Raketti goes wild!')
	.setImage('https://i.pinimg.com/originals/94/04/44/94044461ba17f1c91e099d9102d3af8d.gif')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//SUBBE
	if (msg.content === '+subbe') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Was plätschert hier so?')
	.setImage('https://cdn.discordapp.com/attachments/737101406879875136/788724823517560832/subbe-1.gif')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
 //PUSSY
	if (msg.content === '+pussy') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Zeig Fach!')
	.setImage('https://media1.tenor.com/images/6bece8d313a888c82f9cd864935de634/tenor.gif?itemid=4761326')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
 //GLOMP
	if (msg.content === '+glomp') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Liebe im Anflug!')
	.setImage('https://media.discordapp.net/attachments/778673710377992224/819410082290597888/ROnsLvbm3k2KEtGxDwuFrucETY7w3UrH75UyxFBdccqfQt0cy8HkDYC95GL2TcdX_2.gif')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//HEADSHOT
	if (msg.content === '+headshot') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Boom Headshot!')
	.setImage('https://media1.tenor.com/images/f80045605e0bfb5270c78c115720ac9d/tenor.gif?itemid=16937538')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//HI
	if (msg.content === '+hi') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Hi')
	.setImage('https://media.tenor.com/images/21ccf50625fb010825135447a834d0a2/tenor.gif')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//EVERYONE
	if (msg.content === '+everyone') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('EVERYONE!')
	.setImage('https://media.discordapp.net/attachments/824093091748249621/831477499930214410/evone.gif')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
	msg.reply('@everyone');
  }
//PANIC
	if (msg.content === '+panic') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('AHHHHHHH!')
	.setImage('https://media1.tenor.com/images/709e0542f08ab08bb831363cb3159cab/tenor.gif?itemid=16455119')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//BORING
	if (msg.content === '+boring') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Laaangweilig')
	.setImage('https://media1.tenor.com/images/773e57f86aa2a8b23f2ed59ef5d4ab9a/tenor.gif?itemid=12952726')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//PAT
	if (msg.content === '+pat') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Who is a good boi?')
	.setImage('https://media.tenor.com/images/a9dc0468eeda2936b8d5f38c96693bd9/tenor.gif')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//HUG
	if (msg.content === '+pat') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Umarmung incoming!')
	.setImage('https://media1.tenor.com/images/7edded2757934756fdc240019d956cb3/tenor.gif?itemid=16403937')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
//KUCKUCK
	if (msg.content === '+kuckuck') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Kuckuck')
	.setImage('https://media1.tenor.com/images/e2ce5ce65916ac04726229695879112c/tenor.gif?itemid=9504455')
	.setTimestamp()
	.setFooter('InstaGif v1.0');
	msg.reply(exampleEmbed);
  }
});
