const TelegramBot = require('node-telegram-bot-api');


export default function handler(req, res) {
const token = '7031417747:AAGr4T2ndCANwHiRTrV9RV0S8FjiQJNDeAQ';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Welcome to the bot...!');
  }
});



}
