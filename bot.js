require('dotenv').config() // Lädt die Variablen aus .env
const mineflayer = require('mineflayer')
const express = require('express')

// === CONFIGURATION ===
const bot = mineflayer.createBot({
  host: process.env.SERVER_HOST,        // aus .env
  port: parseInt(process.env.SERVER_PORT),
  username: process.env.BOT_EMAIL,      // aus .env
  auth: process.env.AUTH_MODE           // 'microsoft' oder 'offline'
})

// === EVENTS ===
bot.on('login', () => console.log('✅ Bot connected!'))
bot.on('end', () => {
  console.log('❌ Disconnected. Reconnecting...')
  setTimeout(() => bot.connect(), 5000)
})
bot.on('error', err => console.log('⚠️ Error:', err))

// === EXPRESS WEB SERVER (für Railway/24/7) ===
const app = express()
app.get('/', (req, res) => res.send('Bot is alive!'))
app.listen(process.env.PORT || 3000, () => console.log('✅ Webserver running'))

// === OPTIONAL: ANTI-AFK (BOT JUMP EVERY 60 SEKUNDEN) ===
setInterval(() => {
  bot.setControlState('jump', true)
  setTimeout(() => bot.setControlState('jump', false), 500)
}, 60000)
