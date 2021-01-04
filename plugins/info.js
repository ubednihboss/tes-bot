let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
♻ INFO BOT! :

*AUTHOR*: NAGA SQUAD PRODUCTION
*DESIGNER*: NUROTOMO
*YOUTUBE*: DRAWL NAG

♻ INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
*Jika ada yang menjual belikan akan saya matikan*
UPDATE BOT TERBARU DI YOUTUBE DRAWL NAG

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
KIRIM KE 0813-5730-2007 [Tsel,Gopay]

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
*WAJIB : AMAN,IMAN,IMUN...*

SPESIAL THANKS TO:
>ST4RZ
>FCIABDUL
>NUROTOMO
>MHANKBARBAR
>MFARELS
>DAN KAWAN YANG LAIN [penuh gbisa sebutin]
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

