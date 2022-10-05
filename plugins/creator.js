function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6281276242128@s.whatsapp.net')}\nitem1.TEL;waid=6281276242128:6281276242128\nitem1.X-ABLabel:Busy.\nURL;My Web: https://al-kun.xyz\nEMAIL;Email Owner: pinochz@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6281276242128:6281276242128\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
