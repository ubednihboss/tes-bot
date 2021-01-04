let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    preview = await global.conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } finally {
    let text =  conn.menu ? conn.menu.replace(/%p/g, _p) : `
NFQ BOT 🤖
➸ Prefix:  *「 ${_p} 」*
➸ Status: *「 Online 」*
${more.repeat(1000)}
╔═════✪〘 Miku 〙✪═════
║
╠➥ Name : ${conn.getName(m.sender)}
╠➥ Xp : 21
║
╠═════✪〘 Menu 〙✪═══
║
╠═〘 Xp 〙 ═
╠➥ ${_p}leaderboard
║
╠═〘 Group 〙 ═
╠➥ ${_p}add [nomor, nomor]
╠➥ ${_p}promote [@tagmember]
╠➥ ${_p}demote [@tagadmin]
╠➥ ${_p}linkgrup
╠➥ ${_p}pengumuman [text]
╠➥ ${_p}hidetag [text]
╠➥ ${_p}listonline
╠➥ ${_p}kick @Member
║
╠═〘 About 〙 ═
╠➥ ${_p}info
╠➥ ${_p}jadibot
╠➥ ${_p}berhenti
║
╠═〘 Fitnah 〙 ═
╠➥ > conn.fakeReply(m.chat, '[text]', '6288235435804@s.whatsapp.net', '[text]')
║
╠═〘 Others 〙 ═
╠➥ ${_p}stiker [caption]
╠➥ ${_p}stiker [linkurl]
╠➥ ${_p}bucin
╠➥ ${_p}ssweb [LinkUrl]
╠➥ ${_p}google [Pencarian]
╠➥ ${_p}readmore [Text|Sembunyi]
╠➥ ${_p}leaderboard
╠➥ > return [Kode/Text]
║
╠═〘 OWNER 〙 ═
╠➥ ${_p}bcgc [Text]
╠➥ ${_p}setmenu [Text]
╠➥ ${_p}grouplist
╠➥ ${_p}cdeletechat
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat
╠➥ ${_p}mutechat group
║
╠═〘 Info Owner 〙 ═
╠➥ YouTobe: Drawl Nag
╠➥ No : Wa.me/6288235435804
╠═〘 Info Bot 〙 ═
╠➥ Name : NFQ
╠➥ Versi : 2.0
╠➥ Author : @Nurotomo,
║
╠═〘 Info Github 〙 ═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
