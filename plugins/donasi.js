let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085715590172]
│ • Pulsa [085715590172]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Chat Owner
│ • https://chat.whatsapp.com/JjI08e4HVMUCDjz4DzFPkD
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
