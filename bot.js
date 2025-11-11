const mineflayer = require('mineflayer')

// === CONFIGURATION ===
const bot = mineflayer.createBot({
  host: 'donutsmp.net', // <-- Replace with the server IP
  port: 25565,              // Default port for most Java servers
  username: 'wwwebraheem0@gmail.com', // Or your username if using an offline-mode server
  auth: 'microsoft'         // Use 'microsoft' for modern Minecraft accounts
})

// === EVENTS ===
bot.on('login', () => console.log('✅ Bot connected!'))
bot.on('end', () => {
  console.log('❌ Disconnected. Reconnecting...')
  setTimeout(() => bot.connect(), 5000)
})
bot.on('error', err => console.log('⚠️ Error:', err))
