/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94701881156'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['94701881156'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94701881156'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '𝚄𝚕𝚒𝚗𝚍𝚞 𝙼𝚊𝚞𝚛𝚢𝚊' // Your name ඔබේ නම 
global.botnma = '💃 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐁𝐨𝐭 💃' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '༺𝕄𝕣.𝐔𝐥𝐢𝐧𝐝𝐮 𝐌𝐚𝐮𝐫𝐲𝐚™༻' //ownernama,ownername
global.packname = '⚒️𝐔𝐌 𝐓𝐄𝐂𝐇 𝐁𝐎𝐓🛡️࿐' // Sticker package name 
global.author = '𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚄𝚕𝚒𝚗𝚍𝚞 𝙼𝚊𝚞𝚛𝚢𝚊 ²⁰²²' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/5979defd9007df58321ff.jpg`
global.alive =`✯🤖⚒️ 𝐔𝐌 𝐓𝐄𝐂𝐇 𝐁𝐎𝐓 🛡✯                                                     

🔆 UM TECH Official Bot🛡️࿐

🔆 Made by ; Mr.𝐔𝐥𝐢𝐧𝐝𝐮 𝐌𝐚𝐮𝐫𝐲𝐚™

🔆 Add Your Group ; https://wa.me/+94701881156

🔆 Bot's menu ; Menu

🔆 Bot name ;  ©Queen |🧚‍♀ Elisa

🔥🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰🔥                                                                                                                                                                                                                                 ✯🤖⚒️ 𝐔𝐌 𝐓𝐄𝐂𝐇 𝐁𝐎𝐓 🛡✯`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `
✯🤖⚒️ *𝐔𝐌 𝐓𝐄𝐂𝐇 𝐁𝐎𝐓* 🛡✯                                                    ╔═════             ═════╗               🙏 *𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒈𝒓𝒐𝒖𝒑* 🙏                                                                 🙏 *ආයුබෝවන්* 🙏                                 ⬇️                                                                          🛑මෙම ගෘප් එකේ නීති රීති පිලිපදින්න... ❗                                                    ⬇️                                                                   🛑𝙰𝚍𝚖𝚒𝚗 ලට ගරු කරන්න...❗                                                    ⬇️                                                                            🛑මෙය 𝙱𝚘𝚝'𝚜 ල සිටින ගෘප් එකකි.ඔබට අවශ්‍ය ගීත,වීඩියෝ,ලොගෝ,ස්ටිකර්,මොඩ් ඇප් සහ තවත් බොහෝ දේ ඔවුන්ගෙන් කර ගත හැක.❗                                                             ⬇️                                                 🛑𝙱𝚘𝚝'𝚜 ලගෙන් අනවශ්‍ය දේවල් ලබා ගැනීමෙන් වලකින්න.❗                                                                    ⬇️                                                                🛑මෙය ෆයිටින් ගෘප් එකක් නොවන බැවින් ස්පෑම්,වයිරස් වැනි දේ නොදමන්න...❗                   🔥🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰🇱🇰🔥                            ✯🤖⚒️ *𝐔𝐌 𝐓𝐄𝐂𝐇 𝐁𝐎𝐓* 🛡✯                                                                                                                                                                                                              *╚═══❖             ❖═══╝*
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚄𝚕𝚒𝚗𝚍𝚞 𝙼𝚊𝚞𝚛𝚢𝚊 ²⁰²²`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
