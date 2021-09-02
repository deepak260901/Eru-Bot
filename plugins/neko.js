let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://yuabot.com/api/img/slap')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i

module.exports = handler
